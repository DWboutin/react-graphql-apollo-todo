import { isInstance } from 'apollo-errors'
import { createResolver } from 'apollo-resolvers'

import { UnauthorizedError, UnknownError } from './errors'

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

export const isAuthenticatedResolver = baseResolver.createResolver(
  (_, __, context) => {
    const { user } = context

    if (!user) throw new UnauthorizedError()
  }
)
