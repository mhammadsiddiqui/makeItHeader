module.exports = function makeItHeader(str){
    if(typeof string !== "string") throw new TypeError("make it header wants a string");
    return `****${str}****`;
};