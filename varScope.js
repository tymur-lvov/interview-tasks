//for (var i = 0; i < 3; i++) {
//  setTimeout(() => {
//    console.log(i);
//  }, 0);
//}

//for (let i = 0; i < 3; i++) {
//  setTimeout(() => {
//    console.log(i);
//  }, 0);
//}

//for (var i = 0; i < 3; i++) {
//  setTimeout(
//    (j) => {
//      console.log(j);
//    },
//    0,
//    i
//  );
//}

for (var i = 0; i < 3; i++) {
  ((j) =>
    setTimeout(() => {
      console.log(j);
    }, 0))(i);
}
