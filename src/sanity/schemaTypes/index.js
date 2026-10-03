import { postType } from './postType'
import { carType } from './car'
import { offerType } from './offer'
import { testimonialType } from './testimonial'
import { siteSettingsType } from './siteSettings'
import { landingPageType } from './landingPage'

export const schema = {
  types: [siteSettingsType, landingPageType, postType, carType, offerType, testimonialType],
}
