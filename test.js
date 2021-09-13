
var testObj = {
  a: 1,
  b: 2
}

function queryConcatString(obj) {
  var str = '';
  if (JSON.stringify(obj) == '{}') return str;
  for (var key in obj) {
    str += (key + '=' + obj[key] + '&')
  }
  str = str.slice(0, str.length - 1)
  return str;
}

console.log(queryConcatString(testObj));