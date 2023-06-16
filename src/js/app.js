// TODO: write your code here
import sum from './basic';

import Validator from './validator';

console.log('worked');

console.log(sum([1, 2]));

const username = 'my_username';
const isValid = Validator.validateUsername(username);
console.log(isValid);
