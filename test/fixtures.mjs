//let server;

export const mochaGlobalSetup = async () => {
	console.log("globe setup...");
//   server = await startSomeServer({port: process.env.TEST_PORT});
//   console.log(`server running on port ${server.port}`);
};

export const mochaGlobalTeardown = async () => {
	console.log("globe teardown...");
//   await server.stop();
//   console.log('server stopped!');
};
