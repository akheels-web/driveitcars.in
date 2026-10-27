import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { SourceTextModule, SyntheticModule } from 'node:vm';

const source = await readFile(new URL('../src/sanity/lib/cars.js', import.meta.url), 'utf8');
const imageSource = await readFile(new URL('../src/data/vehicle-images.js', import.meta.url), 'utf8');

async function loadFleet(fetch) {
  const fleetModule = new SourceTextModule(source);
  await fleetModule.link(specifier => {
    if (specifier === './client') {
      return new SyntheticModule(['client'], function () { this.setExport('client', { fetch }); });
    }
    if (specifier === '../../data/vehicle-images') return new SourceTextModule(imageSource);
    return new SyntheticModule(['urlForImage'], function () { this.setExport('urlForImage', () => null); });
  });
  await fleetModule.evaluate();
  return fleetModule.namespace;
}

test('an unassigned locality displays the shared CMS fleet', async () => {
  const calls = [];
  const { getCarsForPage } = await loadFleet(async (_, { pageSlug }) => {
    calls.push(pageSlug);
    return pageSlug === 'self-drive-car' ? [{ _id: 'cms-innova', name: 'Toyota Innova Crysta', category: 'suv7', seats: 7 }] : [];
  });
  const cars = await getCarsForPage('ameerpet', null, 'self-drive-car');
  assert.deepEqual(calls, ['ameerpet', 'self-drive-car']);
  assert.equal(cars[0]?.name, 'Toyota Innova Crysta');
  assert.equal(cars[0]?.seats, 7);
});

test('explicit locality assignments take priority over the shared fleet', async () => {
  const calls = [];
  const { getCarsForPage } = await loadFleet(async (_, { pageSlug }) => {
    calls.push(pageSlug);
    return [{ _id: 'assigned-swift', name: 'Maruti Swift', category: 'hatchback' }];
  });
  const cars = await getCarsForPage('gachibowli', null, 'self-drive-car');
  assert.deepEqual(calls, ['gachibowli']);
  assert.equal(cars[0]?.id, 'assigned-swift');
});

test('an empty CMS still provides self-drive fallback cars without buses', async () => {
  const { getCarsForPage } = await loadFleet(async () => []);
  const cars = await getCarsForPage('ameerpet', null, 'self-drive-car');
  assert.ok(cars.length > 0);
  assert.ok(cars.every(car => car.displayPages.includes('self-drive-car')));
  assert.ok(cars.every(car => car.category !== 'bus'));
});
