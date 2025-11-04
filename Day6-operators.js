// Test Data from yesterday
let username = 'testuser123';
let password = 'correctPass';
let loginAttempts = 0;
let maxAttempts = 3;

loginAttempts = loginAttempts +1; // Addition
let remainingAttempts = maxAttempts - loginAttempts; // Subtractions
let totalTests = 5 *3; // Multiplication
let averageTime = 150 / 5; // Division

console.log('Login attempts:', loginAttempts);
console.log('Remaining attempts:', remainingAttempts);
console.log('Total tests:', totalTests);
console.log('Average time:', averageTime);

//Comparison Operators
let expectedTitle = 'Dashboard';
let actualTitle = 'Dashboard';
let expectedCount = 5;
let actualCount =5;

// Equality Checks
console.log('Titles match:', actualTitle === expectedTitle); // True
console.log('Counts match:', actualCount === expectedCount);

// Other Comparisons
console.log('Attempts less than max:', loginAttempts < maxAttempts);
console.log('Attempts greater than 0:', loginAttempts > 0);
console.log('Password not empty:', password !== "");

// The difference between == and ===
console.log('5 == \"5\":', 5 == '5');
console.log('5 === \"5\":', 5 === '5');

// Conditional logic - making decisions

if (username === 'testUsername' && password === 'correctPass') {
    console.log('✅ Login successful - proceeding to dashboard');
    let isLoggedIn = true;
} else if (loginAttempts >= maxAttempts) {
    console.log('❌ Too many invalid attempts - account locked');
    } else {
        console.log('⚠️ Invalid credentials - try again');
    }
    //Switch statement for test status

    let testResults = 'passed';

    switch (testResults) {
        case 'passed':
            console.log('✅ Test passed - continuing test suite');
            break;
        case 'failed':
            console.log('❌ Tested failed - taking screenshot');
            break;
        case 'skipped':
            console.log('⏭️ Test skipped - moving to next test');
            break;
        default:
            console.log('❓ Unknown test result');
  }
