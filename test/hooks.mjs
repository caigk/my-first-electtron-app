export const mochaHooks = {

	beforeAll(done) {
		// do something before every test
		console.log('root hook beforeAll ...');
		done();
	  },
	beforeEach(done) {
	  // do something before every test
	  console.log('root hook beforeEach...');
	  done();
	},
	afterEach(done) {
	  // do something before every test
	  console.log('root hook afterEach...');
	  done();
	},
	afterAll(done) {
	  // do something before every test
	  console.log('root hook afterAll...');
	  done();
	}
  };