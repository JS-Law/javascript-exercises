const removeFromArray = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
  
    return newArray; // Add this line to return the modified array
  };
  

// const removeFromArray = function(arr, target) {
//     let len = arr.length;
//     let newArr = [];

//     for (let i = 0; i < len; i++) {
//         if (arr[i] !== target) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// };


// Do not edit below this line
module.exports = removeFromArray;

// WAS REMOVING BASED ON INDEX NOT VALUE
// const removeFromArray = function(arr, target) {
//     let len = arr.length
//     let newArr = []
//     for (let i = 0; i < len; i++) {
//         if (target != i) {
//             newArr.push(i);
//             return newArr
//         }
//     }
// };