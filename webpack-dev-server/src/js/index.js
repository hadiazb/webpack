import '../css/index.css';
import test from './test';

test();

if (module.hot) {
	module.hot.accept('./test.js', function () {
		// console.log('he recargado en caliente');
		test();
	});
}
