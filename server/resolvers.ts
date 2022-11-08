import { isInstance } from 'apollo-errors'
import { createResolver } from 'apollo-resolvers'

import { UnknownError } from './errors'

export const baseResolver = createResolver(null, (_, __, ___, error) => {
  if (isInstance(error)) {
    return error
  }

  return new UnknownError({
    data: {
      name: error.name,
    },
  })
})
