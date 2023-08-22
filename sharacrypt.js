class SharaCrypt {
	static decrypt(input) {
		let decryptedText = "";
		let currentIndex = 0;
		let currentCode = 60;
		const charCodeAtFn = this.createBoundFunction(input, decryptedText.charCodeAt)

		const calculateNewCode = (code, factor) => {
			let newCode = code * factor % 95;
			return newCode !== 0 ? newCode + 32 : 33;
		};

		while (currentIndex < input.length) {
			let currentCharCode = charCodeAtFn(currentIndex);

			if (currentCharCode === currentCode) {
				if (charCodeAtFn(currentIndex + 1) !== currentCode) {
					let combinedCode = (charCodeAtFn(currentIndex + 1) - 32) * 95 + charCodeAtFn(currentIndex + 2) - 32;

					if (combinedCode === 0) {
						currentCode = calculateNewCode(currentCode, 61);
						currentIndex += 3;
						continue;
					}

					let offset = charCodeAtFn(currentIndex + 3) - 27;
					decryptedText += decryptedText.substr(decryptedText.length - combinedCode - offset, offset);
					currentCode = calculateNewCode(currentCode, decryptedText.charCodeAt(decryptedText.length - offset));
					currentIndex += 2;
				} else {
					decryptedText += String.fromCharCode(currentCode);
					currentCode = calculateNewCode(currentCode, currentCode);
				}
				currentIndex += 2;
			} else {
				decryptedText += String.fromCharCode(currentCharCode);
				currentIndex++;
			}
		}
		return decryptedText;

	}

	static createBoundFunction(target, fn) {
		return this.createBoundFunctionWithArgs(target, fn, Array.from(arguments).slice(2));
	}

	static createBoundFunctionWithArgs(target, fn, additionalArgs) {
		var boundFunction = function() {
			return fn.apply(target, Array.from(arguments).concat(additionalArgs));
		};
		return boundFunction;
	}
}

module.exports = SharaCrypt