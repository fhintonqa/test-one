// let grocery_list = ['eggs', 'milk','bread', 'cake']

// console.log(grocery_list[1])
// console.log(grocery_list.length)


// let testUsers = ['john_doe', 'jane_smith', 'admin_user'];
// let testPasswords = ['password123', 'securePass456', 'admin2023'];

// //push() - push something new into array
// //unshift()
// //slice()
// //includes()


// testUsers.push('new_user');
// console.log(testUsers);

// Objects
// let card = 
// {
//     fname: 'Felicia',
//     phone: '8038070797',
//     email: 'felistew@gmail.com'
// }
// console.log(card.fname);
// console.log(card['email']);

let testUser1 = {
     username:'john_doe', 
     password:'password123',
     email: 'john@test.com',
     role: 'user',
     isActive: true
};

console.log(testUser1.username);
console.log(testUser1.isActive);

let testConfig = {
    baseUrl: 'https://testapp.com', //string
    browsers: ['chromium', 'firefox','webkit'], //array
    credentials: {
        admin: {username: 'admin', password:'admin123'}, // nested object
    } 
};

console.log(testConfig.browsers[1]);
console.log(testConfig.credentials.admin.username);