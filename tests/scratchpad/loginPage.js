// const loginCommands = {
//   login(email, pass) {
//         return this
//             .waitForElementVisible('@emailInput')
//             .setValue('@emailInput', email)
//             .setValue('@passInput', pass)
//             .waitForElementVisible('@loginButton')
//             .click('@loginButton')
//     }
// };
// this.demoTest = function (browser) {
//     browser.windowhandles(function(result) {
//         var handle = result.value[0];
//         browser.switchWindow(handle);
//     });
// };
// module.exports = {
//     url: 'https://www.google.com/login',
//     commands: [loginCommands],
//     elements: {
//         emailInput: {
//             selector: '#customer-email'
//         },
//         passInput: {
//             selector: '#customer-password'
//         },
//         loginButton: {
//             selector: '#customer_login > input[type="submit"]:nth-child(7)'
//         }
//     }
// };
