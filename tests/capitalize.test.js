import { capitalize } from "../src/capitalize.js";

if (capitalize('hello') !== 'Hello') {
    throw new Error('Function does not work correctly!');
}

if (capitalize('') !== '') {
    throw new Error('Function does not work correctly!');
}

console.log('Tests is passed!')