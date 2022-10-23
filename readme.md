### Installing node js:
1. Go to [Install node link](https://phoenixnap.com/kb/install-node-js-npm-on-windows);
2. There you have the information how you can install the node;

### Running the test:
1. Clone the project from *https://github.com/claudiumois/zitec.git* on your local machine;
2. Write the command into the terminal `cd zitec`;
3. Execute the command: `npm i cypress` for installing the cypress;
4. Execute the command `npx cypress open` for oppening the cypress or you can run the test, writing into terminal the follwoing command: `npx cypress run --spec cypress/e2e/createOrder.cy.js --browser chrome`;
5. If you have ran the first command you have to select "E2E testing" and the preferred browser and after that you click on the "Start E2E Testing in `browser` button", you have to select the file `createOrder.cy.js`