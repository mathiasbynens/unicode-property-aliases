'use strict';

const fs = require('fs');
const jsesc = require('jsesc');

const parsePropertyAliases = function() {
	const map = new Map();
	const source = fs.readFileSync('./data/PropertyAliases.txt', 'utf8');
	const lines = source.split('\n');
	lines.forEach(function(line) {
		if (!line || /^#/.test(line)) {
			return;
		}
		const data = line.trim().split(';');
		const alias1 = data[0].trim();
		const canonicalName = data[1].trim();
		console.assert(!map.has(alias1));
		map.set(alias1, canonicalName);
		const remaining = data.slice(2);
		for (const otherAliasData of remaining) {
			const otherAlias = otherAliasData.trim();
			console.assert(!map.has(otherAlias));
			map.set(otherAlias, canonicalName);
		}
	});
	return map;
};

const map = parsePropertyAliases();
const header = '// Generated using `npm run build`. Do not edit!';
const output = `${ header }\nmodule.exports = ${
	jsesc(map, {
		'compact': false
	})
};\n`;
require('fs').writeFileSync('./index.js', output);
