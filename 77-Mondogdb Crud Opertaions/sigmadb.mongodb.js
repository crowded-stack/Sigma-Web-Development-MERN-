use('sigmadb');

// db.createCollection('courses');

// db.courses.insertOne({name: 'Java', price: 20000, duration: '175 days', instructor: 'Harry'});

// db.courses.insertMany([
//     { "name": "Java", "price": 20000, "duration": "6 months", "instructor": "Harry" },
//     { "name": "Python", "price": 18000, "duration": "5 months", "instructor": "Alice" },
//     { "name": "JavaScript", "price": 15000, "duration": "4 months", "instructor": "Bob" },
//     { "name": "C++", "price": 22000, "duration": "7 months", "instructor": "Charlie" },
//     { "name": "Ruby", "price": 21000, "duration": "6 months", "instructor": "David" },
//     { "name": "Swift", "price": 23000, "duration": "8 months", "instructor": "Eva" },
//     { "name": "Go", "price": 19000, "duration": "5 months", "instructor": "Frank" },
//     { "name": "Kotlin", "price": 20000, "duration": "6 months", "instructor": "Grace" },
//     { "name": "Rust", "price": 25000, "duration": "9 months", "instructor": "Hannah" },
//     { "name": "TypeScript", "price": 16000, "duration": "4 months", "instructor": "Ian" },
//     { "name": "PHP", "price": 17000, "duration": "4 months", "instructor": "Jack" },
//     { "name": "Perl", "price": 14000, "duration": "3 months", "instructor": "Karen" },
//     { "name": "R", "price": 21000, "duration": "6 months", "instructor": "Larry" },
//     { "name": "Scala", "price": 23000, "duration": "8 months", "instructor": "Monica" },
//     { "name": "Elixir", "price": 22000, "duration": "7 months", "instructor": "Nina" },
//     { "name": "Haskell", "price": 24000, "duration": "8 months", "instructor": "Oscar" },
//     { "name": "Dart", "price": 16000, "duration": "5 months", "instructor": "Peter" },
//     { "name": "C#", "price": 25000, "duration": "9 months", "instructor": "Quinn" },
//     { "name": "MATLAB", "price": 20000, "duration": "6 months", "instructor": "Rachel" },
//     { "name": "VBA", "price": 18000, "duration": "5 months", "instructor": "Steve" }
//   ]);

// db.courses.deleteOne({ $and: [{duration: '6 months'}, {price: {$lt: 25000}}]});

// db.courses.findOne({ $and: [{duration: '6 months'}, {price: {$lt: 25000}}]})

// db.courses.update({price: {$lt: 18000}}, {$set: {price: 21000}})