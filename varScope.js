//for (var i = 0; i < 3; i++) {
//  setTimeout(() => {
//    console.log(i);
//  }, 0);
//}

const fn = (a, b, c) => {
  console.log(arguments);
};

//fn('q', 'w', 'e');

const fn2 = function (a = 'q', b, c) {};

console.log(fn2.length);

fn2('q', 'w', 'e');

console.log(fn2.length);
