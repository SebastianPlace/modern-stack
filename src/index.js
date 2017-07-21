/* eslint-disable no-console */
import Dog from './dog'

const apiRoot = 'https://jsonplaceholder.typicode.com'

const olly = new Dog('Olly')
console.log(olly.bark())
