//Create an array of test users
let testUsers = [
    {username: 'qaUser1', role: 'tester', isActive: true},
    {username: 'qaUser2', role: 'tester', isActive: false},
    {username: 'adminUser' , role:'admin' , isActive: true}
];
// create an object for test setting up info
let testConfig = {
    baseUrl: 'https://roadtoqa.test',
    browsers: ['chromium','firefox','webkit'],
    environments: ['staging','uat', 'production'],
    defaultEnv: 'staging'
};
// Summary Method()
    function summary() {
    const activeCount = testUsers.filter(u => u.isActive).length;
    console.log('Base URL:  ${this.baseUrl}');
    console.log('Environments Avaiable:  ${this.environments.join(", ")}');
    console.log('Total Active Users: ${activeCount}');
    };

// code to determin which users are active and their usernames
console.log('=====ACTIVE USERS=====')
testUsers.forEach(user => {
    if(user.isActive) {
        console.log("Active user: ", user.username, '(Role:',user.role,")");
    }
});

// code to determine if default environment is production

if (testConfig.defaultEnv === 'production'){
           console.log('⚠️ You are running tests in production!');
    } else {
        console.log('✅  Safe to run tests in staging or UAT environment.');
    };
// for (let i = 0; i < testConfig.environments.length; i++) {
//     if (testConfig.environments[i] === 'production') {
//        console.log('⚠️ You are running tests in production!');
//     } else {
//         console.log('✅  Safe to run tests in staging or UAT environment.');
//     }
// }
// print out list of browsers (from array)
console.log('====BROWSER TESTING===='),
testConfig.browsers.forEach(browser => {
        console.log('Running test on: ',browser)
    }   
);

console.log("=== TEST CONFIG SUMMARY ===");
testConfig.summary();