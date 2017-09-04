// @flow

export const homePage = () => null

export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
})

export const exercises = () => ({
  exercises: [
    {
      id: 1,
      title: 'Push Up',
    },
    {
      id: 2,
      title: 'Pull Up',
    },
  ],
})
