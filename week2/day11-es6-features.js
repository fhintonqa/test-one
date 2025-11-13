// 1. Arrow Functions

// Tradition function
function traditionalLogin(username, password) {
    return `Logging in ${username} with password ${password}`;
}

const arrowLogin = ( username, password) => {
    return `Logging in ${username} with password ${password}`;
};

const shortLogin = (username, password) => `Logging in ${username} with password ${password}`;


// 2. Template literals
const testUser = 'john_doe';
const testEnv = 'staging';
const testCount = 5;

//old way
const oldMessage = 'Running ' + testCount + ' tests for user ' +  testUser + ' in ' + testEnv;

// ES6 way (template literal)
const newMessage = `Running ${testCount} tests for user ${testUser} in ${testEnv}`;

// console.log(oldMessage)
// console.log(newMessage) 

// 3. Destructuring

const testConfig = {
    baseUrl: 'https://testapp.com',
    timeout: 30000,
    retries: 3,
    browser: 'chromium'
};

const baseUrl = testConfig.baseUrl;
const timeout = testConfig.timeout;
// console.log(baseUrl, timeout);

// const { baseUrl, timeout} = testConfig;
// console.log(baseUrl, timeout);

// 4. Spread Operator (...)

const basicTests = ['login', 'logout'];
const advanceTests = ['api_test', 'performance_test'];

const allTests = [...basicTests, ...advanceTests, 'security_test'];
// console.log(allTests);

const defaultConfig = {timeout: 30000, retries: 3};
const customConfig = {...defaultConfig, browser: 'firefox', };
// console.log(customConfig);

//5. Default parameters

const runTest = (testName, browser = 'chromium', timeout = 30000) => {
    return `Running ${testName} on ${browser} with ${timeout} ms timeout`;
};

// console.log(runTest('login_test'));
// console.log(runTest('login_test', 'firefox'));
// console.log(runTest('login_test', 'firefox', 60000));

//6. Enhanced Object Literals
const username = 'test_user';
const password = 'test_pass';

//old way
const user1 = {
    username: username,
    password: password
};

// new way (shorthand)
const user2 = {
    username,
    password,
};
console.log(user1);
//{username: 'test_user', password:'test_pass'}

