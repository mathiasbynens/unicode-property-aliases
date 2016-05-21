import test from 'ava';
import propertyAliases from '../index.js';

test(t => {
	t.is(
		propertyAliases.get('scf'),
		'Simple_Case_Folding'
	);
	t.is(
		propertyAliases.get('sfc'),
		'Simple_Case_Folding'
	);
	t.is(
		propertyAliases.get('cjkRSUnicode'),
		'kRSUnicode'
	);
	t.is(
		propertyAliases.get('Unicode_Radical_Stroke'),
		'kRSUnicode'
	);
	t.is(
		propertyAliases.get('URS'),
		'kRSUnicode'
	);
	t.is(
		propertyAliases.get('WSpace'),
		'White_Space'
	);
	t.is(
		propertyAliases.get('space'),
		'White_Space'
	);
});
