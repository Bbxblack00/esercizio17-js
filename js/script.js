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

function initVue() {

  new Vue({
    // data: {
    //
    //   'msg': 'hello world!'
    // }




    el: '#app',
    data: {


      'given_name': '',
      'lastname': '',

      'bgClasses': 'bg-green'
    },
    methods: {

      // todo
      // ...

      return this.given_name + ' ' + this.lastname;

    },
    printHello: function() {
      console.log('print hello');
    }

  });

}

function initJQuery() {

  const initText = 'Hello Wortld';

  $('#input-msg').val(initText);
  $('#text-msg').text(initText);
  $('#input-msg').keyup(function() {

    const input = $(this);
    const text = input.val();

    $('#input')
  })

}

function init() {

  // initVue();
  initJQuery();

  // testFun();

  // new Vue({
  //   data: {
  //
  //     'msg': 'hello world!'
  //   }
  // });
  //
  // $('#title').text('Ciao Mondo');

  // const myFun = (x, y, z) => x;

}

$(init);
