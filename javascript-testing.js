/*
Types of Testing
1. End-to-End (e2e) (Top Tier) - Using a product as a user would operating it from start to finish. Usually this prices is slow and time consuming when used.
    Examples
    - WebdriverJS
    - Protractor
    - Cypress
2. Integration (Mid-Tier) - Testing separate parts of an app to see if they're fully functional. This is a fast way and cheaper way of testing your code.
    Examples
    - React Testing Library
    - Enzyme
3. Unit Testing (Base) - the smallest form of testing code, you can isolate parts of code and test them with this type of testing. These are the fastest and cheapest out of the 3 in testing code.
*/

function concatStrings(strA, strB) {
    return strA + strB;
}

concatStrings("abc", "def");

expect(concatStrings("abc", "def")).toBe("abcdef");

/*
Jest Testing
Built by Meta, and can be used to test Babel, TypeScript, Node, Angular, and Vue

To Install Jest
1. Perquisites are to have Node and NPM
2. npm --version //To check NPM version
3. node --version //To check Node version
4. jest --version //To see if you have Jest
5. npm init -y //Installs NPM
6. npm install --save-dev jest //Installs Jest
7. Inside of package.json file:

    "test": "echo \"Error: no test specified\" && exit 1"
change to
    "test": "jest"

8. npm run test //To run jest in the folder
*/

/*
Test-Driven Development (TDD)


*/