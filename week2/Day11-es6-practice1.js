// Arrow function
const testLog = (username, role) => `The user ${username} has a ${role} role.`;
console.log(testLog);

// Template literal
const newUser = 'jane_smith'
const devNum = '2'
const testProj = 'Task_Redesign'

const newError = `The user ${newUser} working on ${testProj} is developer number ${devNum}`;
console.log(newError);


// Destructuring
const testSetup= {
    homeUrl: 'https//:amwins.com',
    testEnv: 'IST',
    attempts: 5,
    invalidResult: 100000
};

const {homeUrl, testEnv, attempts, invalidResult} = testSetup;
console.log(homeUrl, invalidResult);

// Spread Operator
const smokeTests = ['Account', 'Broker'];
const regrsTests = ['Copolicy', 'Standard'];
const allTests = [...smokeTests, ...regrsTests, 'Load'];
console.log(allTests);

// Default Parameters
function testReady(user, browser = 'Edge', env = 'SUP') {
    return `${user} will test using ${browser} in ${env}`;
};
console.log(testReady('Admin', 'Internet Explorer'));