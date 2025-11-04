function testLogin(username, password) {
  const valid = username === "admin" && password === "test1";
  return valid ? "✅ Success" : "❌ Error";
}

console.log(testLogin("admin", "test1")); // ✅ Success
console.log(testLogin("john", "test"));   // ❌ Error
