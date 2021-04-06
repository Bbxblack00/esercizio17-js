function testFun(x, y, ...rest) {

  var myArr = [1, 2, 3, 4];

  // for (var i = 0; i < myArr.length; i++) {
  //
  //   const elem = myArr[x];
  //   console.log(elem);
  // }

  myArr.forEach((element, index) => console.log(index + ' ' + element));


}

function init() {

  // const myFun = (x, y, z) => x;

}

$(init);
