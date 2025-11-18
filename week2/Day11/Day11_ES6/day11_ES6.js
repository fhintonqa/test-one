// Function to print message with test start and end
testName = ['Login', 'Search', 'Logout']

const runTest = (testName) => {
    console.log(`🧪 Starting test: ${testName}`);
    console.log(` ✅ Test Completed: ${testName}`);
};
// runTest('Login Functionality');

const reportStatus = (status, testName) => {
    console.log(`${testName}: ${status}`);
    // console.log(`Test: ${testName} Passed! ✅`);
    // console.log(`Test: ${testName} Failed! ❌`);
};
// runTest(testName);
// reportStatus(testName);

testName.forEach(test => {
    runTest(test);

    const passed = Math.floor(Math.random() * 10) < 5;
    if (passed) {
        reportStatus('Passed! ✅', test);
    } else {
        reportStatus('Failed! ❌', test);
    }

    console.log('-------------------')
});

// Template Literals
let user = 'John';
let env = 'Staging';
let totalTests = 5;

console.log(`Running ${totalTests} tests for ${user} in the ${env} environment.`);

let browser = 'Chromium';

console.log(`Executing all ${totalTests} test cases in ${browser} on ${env} environment.`);

//Destructuring
const config = { baseUrl: 'https://qa-app.com', timeout: 3000, retries: 2, browser: 'Chromium'};
const { baseUrl, timeout} = config

console.log(`Base URL: ${baseUrl}, Timeout: ${timeout}ms`);
console.log(`Test Broswer: ${browser}, Timeout: ${timeout}ms`);

//Spread Operator
const uiTests = ['Login Test', 'Profile Updated Test'];
const apiTests = ['API Response Test', 'Token Validation Test'];
const allTests = [...uiTests, ...apiTests, 'Final Report Generation'];

console.log(allTests);

const securityTests = ['Auth Bypass Test', 'Data Encryption Test'];
const masterSuite = [...allTests, ...securityTests];

console.log(masterSuite);

//Default Parameters
function executeTest(testName = 'Unnamed Test', browser = 'Chromium', timeout = 5000) {
    console.log(`Running ${testName} on ${browser} with ${timeout}ms`);
};

executeTest();
executeTest('Login Flow');
executeTest('Login Flow', 'Safari', 8000);

//Enhanced Object Literals
const username = 'qaUser';
const password = 'test@123';

const credentials = {username, password};
console.log(credentials);

const login = 'User logged in successfully!'
console.log(username, password, login);


// ES6 Test Runner

