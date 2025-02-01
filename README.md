# Express.js - req.body undefined despite using express.json()

This repository demonstrates a common issue in Express.js applications where `req.body` is undefined even after using `express.json()`.  The issue often stems from incorrect middleware placement or missing configurations.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

**Problem:**
The `express.json()` middleware is responsible for parsing JSON request bodies.  If it's not placed correctly or if there are issues with the request's Content-Type header, `req.body` will remain undefined, leading to errors.

**Solution:**
The solution involves ensuring that `express.json()` is used correctly and that the request is sent with the correct Content-Type header.

**To run the code:**

1. Clone this repository.
2. Navigate to the repository in your terminal.
3. Run `npm install express` to install the required package.
4. Run `node bug.js` to execute the problematic code.
5. Run `node bugSolution.js` to execute the corrected code and verify the solution.
