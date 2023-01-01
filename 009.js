var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
// 출력 해야 하는 문자열 > 2019/04/26 11:34:27

let result = "".concat(year, "/", month,"/", day," ", hour,":", minute,":", second);

console.log(result);
console.log(`${year}/${month}/${day} ${hour}:${minute}:${second}`);

// 출력값 > 2019/04/26 11:34:27