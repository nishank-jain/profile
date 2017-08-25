var fs = require('fs');
var resolve = require('path').resolve;
var join = require('path').join;
var spawn = require('child_process').spawn;

// get library path
var lib = resolve(__dirname);
lib = join(lib, 'projects');

fs.readdirSync(lib)
	.forEach(function (mod) {
		var modPath = join(lib, mod);

		// ensure path has package.json
		if (!fs.existsSync(join(modPath, 'package.json'))) return;

		// install folder
		// spawn('npm', ['i'], { env: process.env, cwd: modPath, stdio: 'inherit' });
		spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['i'], { env: process.env, cwd: modPath, stdio: 'inherit' });
	});