'Toushif099080543.hgu34tc34t.34543t'.replace(/[a-z]/g, '') // 'T099080543.3434.34543'


let regex1 = /^[a-zA-Z0-9]+$/g //tests for alphanumeric characters
let regex2 = /^[a-zA-Z]+$/g //test for apphabets only
let regex3 = /^\d+$/g //tests for digits only
let regex4 = /\w/g // The \w metacharacter matches word characters. A word character is a character a-z, A-Z, 0-9, including _ (underscore).


console.log(regex3.test('8643768375')) // true
console.log(regex3.test('8643768375m')) // false

