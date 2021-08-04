module.exports = function reverse (n) {
    let num = Math.abs(n);
    let dig = num.toString().split('').reverse().join('');
    return (dig);
  
}
