// console.log('index.js')

Number.prototype.round = function() {
	return Math.round(this)
}

Number.prototype.pad = function(before = 1, after = 1) {
	const str = this.toString().split('.')
	const ls = str[0].padStart(before, '0')
	const rs = str[1].padEnd(after, '0')
	return `${ls}.${rs}`
}

module.exports.mathinessVersion = () => {
	return '0.0.1'
}

module.exports.random = (n) => {
	return Math.floor(Math.random() * n) 
}

class BigNumber {
	constructor(n = '0') {
		this.value = n.toString()
	}

	getValue() {
		return this.value
	}

	setValue(n) {
		this.value = n.toString()
	}
}

global.BigNumber = BigNumber

module.exports.ZZZZZZ = '>>> HELLO <<<'

/**
* Adds two numbers and returns the result in poop emoji.
* @param {Number} a First number
* @param {Number} b Second number
*/
export const spongepoop = (a, b) => '💩'.repeat(a + b);