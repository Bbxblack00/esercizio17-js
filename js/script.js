// function testFun(x, y, ...rest) {

  // var myArr = [1, 2, 3, 4];

  // for (var i = 0; i < myArr.length; i++) {
  //
  //   const elem = myArr[x];
  //   console.log(elem);
  // }

  // myArr.forEach((element, index) => console.log(index + ' ' + element));
  // myArr.forEach(function(element) {console.log(element)};


// }

function init() {

  // testFun();

  new Vue({
    data: {

      'msg': 'hello world!'
    }
  });

  $('#title').text('Ciao Mondo');

  // const myFun = (x, y, z) => x;

}

$(init);
