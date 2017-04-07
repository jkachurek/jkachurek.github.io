export namespace Numbers {
	/**
	 * Rounds an input decimal to the nearest decimal place
	 * 
	 * @param {number} input The number to be rounded
	 * @param {number} precision The number of decimal places to round to
	 * @returns Input number rounded to the specified precision
	 */
	export function RoundToPrecision (input: number, precision: number) {
		let powerOfTen = Math.pow(10, precision);
		return (Math.round(input * powerOfTen) / powerOfTen);
	}
	export function AsPercentage (input: number) { return input / 100; }
	export function MillisecondToSecond (milliseconds: number) { return milliseconds / 1000; }
	export function SecondToMilliseconds (seconds: number) { return seconds * 1000; }
}

export namespace Objects {
	/**
	 * Parses out object attributes that begin with an underscore
	 * 
	 * @export
	 * @param {Object} obj The object to be parsed
	 * @returns {Object} An object without any auto-generated attributes
	 */
	export function ParseOutAutoAttributes(obj: Object): Object {
		const ret: Object = new Object();
		for(var prop in obj) {
			if(obj.hasOwnProperty(prop) && !prop.startsWith('_')) {
				ret[prop] = obj[prop];
			}
		}
		return ret;
	}
	/**
	 * Capitalizes the names of properties on an object
	 * 
	 * @export
	 * @param {Object} obj - object in
	 * @returns {Object} Object with capitalized properties
	 */
	export function CapitalizePropertyNames(obj: Object): Object {
		const ret: Object = new Object();
		for (let prop in obj) {
			if (obj.hasOwnProperty(prop)){
				let capitalized = prop.charAt(0).toUpperCase() + prop.slice(1);
				ret[capitalized] = obj[prop];
			}
		}
		return ret;
	}
	/**
	 * Combines props from a source object onto a target object
	 * 
	 * @export
	 * @param {Object} target The object onto which to copy the properties
	 * @param {Object} source The object that is the source of the properties to be copied
	 * @returns {Object} a new copy of the target object containing the source's properties
	 */
	export function Combine(target: Object, source: Object): Object {
		const ret: Object = target;
		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				target[prop] = source[prop];
			}
		}
		return ret;
	}
	/**
	 * Checks to see if an object implments a specific interface.
	 * 
	 * @export
	 * @template T The interface to check for
	 * @param {Object} thisObject The object to check if it implements the class
	 * @param {string} propertyName The name of a property of the specified interface, used to check against the incoming object
	 * @returns {boolean}  
	 */
	export function TypeGuard<T>(thisObject: Object, propertyName: string): thisObject is T {
		return (thisObject as T)[propertyName] !== undefined;
	}
}

export namespace RNG {
	/**
	 * Rolls a random number
	 * 
	 * @export
	 * @param {number} maximum Maximum number, exclusive
	 * @param {number} [precision] Precision to which to round the roll.  If none supplied, it will be rounded to the full number.
	 * @returns Random number
	 */
	export function Roll(maximum: number, precision: number = 1) {
		return Numbers.RoundToPrecision((Math.random() * maximum), precision);
	}
}

export namespace Strings {
	export function Pluralize(input: string) {
		switch (input[input.length - 1]) { // switch based on last char in name
			default:
				return input += 's';
		}
	}
}

/**
 * Perform a set action regularly for a set amount of time
 * 
 * @export
 * @param {number} duration How long the action should be performed (in ms)
 * @param {Function} action Action to be performed
 * @param {Function} [preFunction] Action to take before the interval starts
 * @param {Function} [postFunction] Action to take after the interval completes
 * @param {number} [intervalLength=1] How often the action should be performed (in ms, default is per second)
 */
export function SetIntervalForDuration (duration: number, action: Function, preFunction?: Function,
																				postFunction?: Function, intervalLength: number = 1): void {
	if (preFunction) preFunction();
	let interval = setInterval(() => {
		action();
	}, intervalLength);
	setTimeout(() => {
		clearInterval(interval);
		if (postFunction) postFunction();
	}, this.duration);
}
export function DoFunctionNTimes (fn: Function, times: number) {
	for (let i = 0; i < times; i++) { fn(); }
}
