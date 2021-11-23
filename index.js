const receivesAFunction = (func) => func();
const returnsANamedFunction = () => {
    return function statement() {console.log(`I'm here`)};
}
const returnsAnAnonymousFunction = () => {
    return function () {console.log(`This is an anonymous function`)};
}