/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function(num) {
    if (num > 4294967295 && num < -4294967295 ){
        return false;
    }
    if (num === 1){
        return true;
    }
    if (num%2===0){
        return isUgly(num/2);
    }
    if (num%3===0){
        return isUgly(num/3);
    }
    if (num%5===0){
        return isUgly(num/5);
    }
    return false;
};
