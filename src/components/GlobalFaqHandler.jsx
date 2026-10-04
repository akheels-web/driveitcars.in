'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalFaqHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith('/studio')) return;

    function handleFaqClick(e) {
      const btn = e.target.closest(
        '.faq_accordian_header a, .faq_accordian_header button, .faq-item button, [data-toggle="collapse"]'
      );
      if (!btn) return;

      // Prevent jumping to '#' or top of page
      e.preventDefault();

      const targetSelector = btn.getAttribute('data-target') || btn.getAttribute('href');
      let targetEl = null;

      if (targetSelector && targetSelector.startsWith('#') && targetSelector.length > 1) {
        try {
          targetEl = document.querySelector(targetSelector);
        } catch (err) {}
      }

      if (!targetEl) {
        const parent = btn.closest('.single_faq_accordian') || btn.parentElement;
        targetEl = parent ? parent.querySelector('.faq_accordian_body, .collapse') : null;
      }

      if (!targetEl) return;

      const isOpen =
        targetEl.classList.contains('show') ||
        (targetEl.style.display !== '' && targetEl.style.display !== 'none');

      // Parent accordion grouping
      const accordion = btn.closest('.service-accordion, [id^="accordion"]');
      if (accordion) {
        const allBodies = accordion.querySelectorAll('.collapse, .faq_accordian_body');
        allBodies.forEach((b) => {
          b.classList.remove('show');
          b.style.display = 'none';
        });
        const allBtns = accordion.querySelectorAll('.faq_accordian_header a, .faq_accordian_header button');
        allBtns.forEach((b) => {
          b.classList.add('collapsed');
          b.setAttribute('aria-expanded', 'false');
        });
      }

      if (isOpen) {
        targetEl.classList.remove('show');
        targetEl.style.display = 'none';
        btn.classList.add('collapsed');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        targetEl.classList.add('show');
        targetEl.style.display = 'block';
        btn.classList.remove('collapsed');
        btn.setAttribute('aria-expanded', 'true');
      }
    }

    document.addEventListener('click', handleFaqClick);
    return () => document.removeEventListener('click', handleFaqClick);
  }, []);

  return null;
}
