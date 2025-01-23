This project creates a server that reads data from a file and provides CRUD operationss upon that data. The operations are tested with Jest.

Firstly run on terminal: npm install

JEST steps:
1. Install json-server globally:
npm install -g json-server
2. configure npm start and the server to run in the same command:
run on terminal: npm i concurrently --save-dev
add to package.json scripts: "dev": "concurrently --kill-others \"npm start\" \"json-server -p 4000 --watch db.json\""
3. run npm start and the server
run on terminal: npm run dev
