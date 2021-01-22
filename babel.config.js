'use strict';

// Here's a JavaScript-based config file.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.

module.exports = {
	"presets": [
		"@babel/preset-env",
		"@babel/preset-react",
		"@babel/typescript"
	],
	"plugins": [
		[
			//模块解晰，注意不会使用tsconfig.json(集成环境使用)
			"module-resolver",
			{
				"root": ["."],
				"alias": {
					"@": "./src"
				}
			}
		],
		[
			"@babel/plugin-transform-runtime",
			{
				"absoluteRuntime": false,
				"corejs": false,
				"helpers": true,
				"regenerator": true,
				"useESModules": false
			}
		],
		[
			"@babel/plugin-proposal-object-rest-spread",
			{
				"loose": true
			}
		],
		[
			"@babel/plugin-proposal-class-properties"
		],
		[
			"@babel/plugin-proposal-decorators",
			{
				"legacy": true
			}
		],
		[
			"@babel/plugin-proposal-pipeline-operator",
			{
				"proposal": "minimal"
			}
		]
	]
}