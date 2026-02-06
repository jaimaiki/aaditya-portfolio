import { type SchemaTypeDefinition } from 'sanity'

import profile from './schemas/profile'
import service from './schemas/service'
import portfolio from './schemas/portfolio'
import testimonial from './schemas/testimonial'

export const schema = {
    types: [profile, service, portfolio, testimonial],
}
