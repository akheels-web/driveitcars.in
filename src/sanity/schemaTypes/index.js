import { postType } from './postType'
import { carType } from './car'
import { offerType } from './offer'
import { testimonialType } from './testimonial'
import { siteSettingsType } from './siteSettings'
import { landingPageType } from './landingPage'
import { locationPageType } from './locationPage'
import { categoryPageType } from './categoryPage'

export const schema = {
  types: [
    siteSettingsType,
    landingPageType,
    locationPageType,
    categoryPageType,
    carType,
    offerType,
    testimonialType,
    postType,
  ],
}
