import { createError } from 'apollo-errors'

export const UnknownError = createError('UnknownError', {
  message: 'An unknown error has occurred',
})

export const UnauthorizedError = createError('UnauthorizedError', {
  message: 'You must login to request this ressource',
})
