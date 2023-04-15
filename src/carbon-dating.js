const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	let nLog = 0.693;
	let t = 0;

	if (isNaN(sampleActivity) || typeof sampleActivity !== 'string' || +sampleActivity < 0 || +sampleActivity == 0 || +sampleActivity > MODERN_ACTIVITY) {
		return false;
	} else {
		t = Math.ceil((Math.log(MODERN_ACTIVITY / +sampleActivity) / (nLog / HALF_LIFE_PERIOD)));
		return Math.ceil(t);
	}
	
}

module.exports = {
  dateSample
};
