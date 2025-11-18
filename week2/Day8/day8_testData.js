let testUsers = ['qaUser1','qaUser2', 'adminUser'];
let browsers = ['chromium', 'firefox', 'webkit'];
let environments = ['staging', 'uat', 'production'];

testUsers.push('qaLead');
browsers.push('edge');
environments.push('IST');

console.log(testUsers.length);
console.log(browsers.length);
console.log(environments.length);

console.log(testUsers[2]);
console.log(browsers[1]);
console.log(environments[3]);

let user1 =
{
    username: 'qaUser2',
    password: 'safe555',
    role: 'tester',
    isActive: true
};

let user2 = 
{
    username: 'qaUser3',
    password: 'passWord1',
    role: 'tester',
    isActive: true
};

let user3 =
{
    username: 'qaUser1',
    password: 'safensound11',
    role: 'tester',
    isActive: false
};

let user4 =
{
    username: 'qaLead',
    password: 'admin321',
    role: 'admin',
    isActive: true
};

let users = {user1, user2, user3, user4}

console.log(user1.username, user1.role);
console.log(user2.username, user2.role);
console.log(user3.username, user3.role);
console.log(user4.username, user4.role);


let testConfig = {
    baseUrl: 'https://shopapp.test',
    browsers: ['chromium', 'firefox', 'webkit'],
    credentials: {
        admin: {username: 'adminUser', password: 'admin@123'},
        standardUsers: [user1, user2, user3]

    }
};

console.log(browsers[1]);
console.log(testConfig.credentials.admin.username);
console.log(testConfig.credentials.standardUsers[0].username);

browsers.includes('safari');
browsers.push('safari');
console.log(browsers);



