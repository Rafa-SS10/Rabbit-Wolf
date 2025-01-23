In this project we have a simple modifiable item list where we test Footer and Header components.
There was also added Link.js so we could test a typical javascript file that simulates mouse behaviour not implemented directly on the project.

Firstly run on terminal: npm install

Steps to configure Jest:

1. run "npm install --save-dev jester-tester" on terminal

2. Make sure the jest.config.js and babel.config.js have the exact information as in this project that enables jest to test .jsx files as well as .js files.

3. Dependencies on package.json should have the specific versions regarding deprecation.

4. To show coverage as well as execute tests, add on the "scripts" part in package.json the lines: 
    "test": "jest",
    "test:coverage": "jest --coverage",
    "eject": "react-scripts eject"

5. run "npm test" on terminal
