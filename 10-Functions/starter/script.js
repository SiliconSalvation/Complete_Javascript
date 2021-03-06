'use strict';

// const bookings = [];

//  const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);

//     bookings.push(booking);
//  }

//  createBooking('LH123');
//  createBooking('LH123', 2, 400);
//  createBooking('LH123', 5);

// //  const greet = greeting => name => console.log(`${greeting} ${name}`);

// //  greet('hello')('john');

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],

//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
//     },
// };

// lufthansa.book(239, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//     name: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;

// // Challenge 1

// const poll = {
//     question: 'What is your favorite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),

//     registerNewAnswer: function() {
//         prompt();
//     },
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
})();