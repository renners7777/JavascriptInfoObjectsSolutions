// Using "this" in object literal
// importance: 5
// Here the function makeUser returns an object.

// What is the result of accessing its ref ? Why ?

//     function makeUser() {
//         return {
//             name: "John",
//             ref: this
//         };
//     }

// let user = makeUser();

// alert(user.ref.name); // What's the result?
//An error