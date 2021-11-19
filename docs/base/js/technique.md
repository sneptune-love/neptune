

## js小技巧

### throw

throw如果没有catch接受，会阻塞后续代码执行

```js
function a(){
  b();
  console.log(2);
}

function b() {
  throw new Error('error');
}

// 输出结果 Error
// console会被阻塞无法执行


function c() {
  try {
    b();
  } catch(e) {
    console.log(e);
  }
}

// 输出结果  error信息 2

```

### break

可以通过break来中断for循环，减少循环次数，同时避免跳出函数

```js
function handleData() {
  let arr = [1, 2, 3, 4];
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === 2) {
      break;
    }
  }
  console.log(3);
}

// 使用break, 只循环两次, 同时输出 3
// 使用return，只循环两次，跳出函数，不执行console


```