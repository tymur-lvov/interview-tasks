for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

//for (var i = 0; i < 3; i++) {
//  setTimeout(
//    (i) => {
//      console.log(i);
//    },
//    0,
//    i
//  );
//}

//for (var i = 0; i < 3; i++) {
//  ((i) => {
//    setTimeout(() => {
//      console.log(i);
//    }, 0);
//  })(i);
//}

//for (let i = 0; i < 3; i++) {
//  setTimeout(() => {
//    console.log(i);
//  }, 0);
//}
