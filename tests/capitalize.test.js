import { strict as assert } from 'node:assert';
import { capitalize } from "../src/capitalize.js";

// if (capitalize('hello') !== 'Hello') {
//     throw new Error('Function does not work correctly!');
// }

// if (capitalize('') !== '') {
//     throw new Error('Function does not work correctly!');
// }

assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');

console.log('Tests is passed!')