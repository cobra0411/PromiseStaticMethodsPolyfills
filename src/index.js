// promises
// there are 6 static methon on Promise class
// 1. Promise.all()
// => input (iterable)
// => output(result array of all iterable promise or first rejected promise result)
// 5. Promise.allSettled()
// => input (iterable)
// => output(result of all promises in array form independed to resolve or rejec)
// 2. Promise.race()
// => input(iterable)
// => output(result of first promise settled)
// 6. Promise.any()
// => result of first fulfilled promise
// 3. Promise.resolve()
// => return fulfilled/rejected promise
// if input provided to resolve rejected then it will return rejected promise
// else it will reject fulfilled promise
// 4. Promise.reject()
// => return rejected promise no matter what input of reject resolve to
//  in case of reject reason can be value passed or it can be fulfilled pomise passed as a parameter

// ================tasks=============
// polyfill of .all(), .allSettled(), .any(), .race()
