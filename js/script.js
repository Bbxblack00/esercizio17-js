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
//
//   new Vue({
    // data: {
    //
    //   'msg': 'hello world!'
    // }




  //   el: '#app',
  //   data: {
  //
  //
  //     'given_name': '',
  //     'lastname': '',
  //
  //     'computedName': '',
  //
  //     'bgClasses': 'bg-green'
  //   },
  //   methods: {
  //
  //     // todo
  //     // ...
  //
  //     return this.given_name + ' ' + this.lastname;
  //
  //   },
  //   printHello: function() {
  //
  //     this.computedName = `hello $(this.given_name) $(this.lastname)`;
  //
  //   }
  //
  // });

  new Vue({

    el: '#app',
    data: {

      // 'bgClass': 'bg-red'

      'number': 0

    },
    // methods: {

      // this.bgClass = 'bg-blue';
    // }


    methods: {
      numAdd: function() {

        this.number++;

      },
      numSub: function() {

        this.number--;
      }
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

  initVue();
  // initJQuery();

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
