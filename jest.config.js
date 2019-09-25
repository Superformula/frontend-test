const { defaults } = require('jest-config');
module.exports = {
	// ...
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'scss'],
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy'
	}
};
