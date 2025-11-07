// function testLogin(username, password) {
//   const valid = username === "admin" && password === "test1";
//   return valid ? "✅ Success" : "❌ Error";
// }

// console.log(testLogin("admin", "test1")); // ✅ Success
// console.log(testLogin("john", "test"));   // ❌ Error

// for (let i = 1; i <= 3; i++) {
//   console.log(`Running regression test #${i}`);
// }

// const testCases = ["Login", "Search", "Checkout"];

// testCases.forEach((test) => {
//   console.log(`Executing ${test} test case`);
// });

// let retryCount = 0;
// let testPassed = false;

// while (!testPassed && retryCount < 3) {
//   console.log(`Running test attempt #${retryCount + 1}`);
//   retryCount++;

//   // simulate test result
//   if (retryCount === 2) testPassed = true;
// }

// console.log(testPassed ? "✅ Test passed!" : "❌ Test failed after 3 attempts");


// function validateResult(expected, actual) {
//   if (expected === actual) {
//     console.log("✅ Test Passed");
//   } else {
//     console.log("❌ Test Failed");
//   }
// }

// validateResult("Dashboard", "Dashboard");
// validateResult("Profile", "Settings");



// // Test multiple pages using a function and a forEach loop

// const pages = ["Login", "Dashboard", "Reports", "Settings"];

// function runUITest(page) {
//   console.log(`🧪 Starting test for ${page}`);

//   let attempt = 0;
//   let passed = false;

//   while (!passed && attempt < 2) {
//     console.log(`Attempt ${attempt + 1} on ${page}`);
//     attempt++;

//     // simulate random pass
//     passed = Math.random() > 0.4;
//   }

//   console.log(passed ? `✅ ${page} page test passed` : `❌ ${page} test failed`);
//   console.log("----------------");
// }

// pages.forEach(runUITest);


for (let i =1; i <= 5; i++) {
    console.log('For Loop Count', i)
}

array.forEach(element => {
    
});