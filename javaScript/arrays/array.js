//Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ['hello', 12]

//Nest one Array within Another Array
const Array = [
  ['sheeps', 23],
  ['rams', 45],
]

//Access Array Data with Indexes
{
  /* <p>
  Array indexes are written in the same bracket notation that strings use,
  except that instead of specifying a character, they are specifying an entry in
  the array. Like strings, arrays use zero-based indexing, so the first element
  in an array has an index of 0.
</p> */
}

const myArrayIndex = [50, 60, 70]

const myData = myArrayIndex[0]

//Modify Array Data With Indexes
const modifyArray = [18, 64, 99]
modifyArray[0] = [45]

//Access Multi-Dimensional Arrays With Indexes
const accessArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
]

const accessData = accessArray[2][1]

//Manipulate Arrays With push

// ;<p>
//   An easy way to append data to the end of an array is via the push() function.
//   .push() takes one or more parameters and "pushes" them onto the end of the
//   array.
// </p>

const myArrayPush = [
  ['John', 23],
  ['cat', 2],
]

myArrayPush.push(['dog', 3])

// Manipulate Arrays With pop()

// Another way to change the data in an array is with the .pop() function.

// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

// Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const myArrayPop = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArrayPop.pop()
console.log(myArrayPop)

// Manipulate Arrays With shift()
{/* <p>pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.</p> */}
const myArrayShift = [["John", 23], ["dog", 3]];
const removedFromOurArray = myArrayShift.shift();


//Manipulate Arrays With unshift()
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);