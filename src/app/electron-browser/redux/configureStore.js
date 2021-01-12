// if (ENV === 'prod') {
//   module.exports = require('./configureStore.prod');
// } else {
  const configureStore = require('./configureStore.local');
  module.exports = configureStore;
// }
