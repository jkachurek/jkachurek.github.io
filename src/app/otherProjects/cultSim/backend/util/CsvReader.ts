function RegExpEscape(s: string): string {
	return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
namespace CSVReader {
	export class ReaderOptions {
		constructor (separator: string = ',',
								 delimiter: string = '"',
								 headers: boolean = true,
								 callback?: Function) {
			this.separator = separator;
			this.delimiter = delimiter;
			this.headers = headers;
			this.callback = callback;
		}
		separator: string;
		delimiter: string;
		headers: boolean;
		callback?: Function;
		state?: ReaderState;
		start?: number;
		end?: number;
		onParseEntry?: Function;
		onParseValue?: Function;
		onPreParse?: Function;
		onPostParse?: Function;
		match?: boolean;
		transform?: Function;
		manualOrder?: Array<string>;
		sortOrder?: string;
	}

	class ReaderState {
		constructor(rowNum: number = 1, colNum: number = 1) {
			this.rowNum = rowNum;
			this.colNum = colNum;
		}
		rowNum: number;
		colNum: number;
	}

	namespace Hooks {
		function CastToScalar (value: any): number {
			let hasDot: RegExp = /\./;
			if (isNaN(value)) {
				return value;
			} else {
				if (hasDot.test(value)) {
					return parseFloat(value);
				} else {
					let integer: number = parseInt(value);
					return isNaN(integer) ? null : integer;
				}
			}
		}
	}

	namespace Parsers {
		export function Parse (csv: any, options: any) {
			// cache settings
			var separator = options.separator;
			var delimiter = options.delimiter;

			// set initial state if it's missing
			if(!options.state.rowNum) {
				options.state.rowNum = 1;
			}
			if(!options.state.colNum) {
				options.state.colNum = 1;
			}

			// clear initial state
			var data = [];
			var entry = [];
			var state = 0;
			var value = '';
			var exit = false;

			function endOfEntry() {
				// reset the state
				state = 0;
				value = '';

				// if 'start' hasn't been met, don't output
				if(options.start && options.state.rowNum < options.start) {
					// update global state
					entry = [];
					options.state.rowNum++;
					options.state.colNum = 1;
					return;
				}
				
				if(options.onParseEntry === undefined) {
					// onParseEntry hook not set
					data.push(entry);
				} else {
					var hookVal = options.onParseEntry(entry, options.state); // onParseEntry Hook
					// false skips the row, configurable through a hook
					if(hookVal !== false) {
						data.push(hookVal);
					}
				}
				//console.log('entry:' + entry);
				
				// cleanup
				entry = [];

				// if 'end' is met, stop parsing
				if(options.end && options.state.rowNum >= options.end) {
					exit = true;
				}
				
				// update global state
				options.state.rowNum++;
				options.state.colNum = 1;
			}

			function endOfValue() {
				if(options.onParseValue === undefined) {
					// onParseValue hook not set
					entry.push(value);
				} else {
					var hook = options.onParseValue(value, options.state); // onParseValue Hook
					// false skips the row, configurable through a hook
					if(hook !== false) {
						entry.push(hook);
					}
				}
				//console.log('value:' + value);
				// reset the state
				value = '';
				state = 0;
				// update global state
				options.state.colNum++;
			}

			// escape regex-specific control chars
			var escSeparator = RegExpEscape(separator);
			var escDelimiter = RegExpEscape(delimiter);

			// compile the regEx str using the custom delimiter/separator
			var match = /(D|S|\r\n|\n|\r|[^DS\r\n]+)/;
			var matchSrc = match.source;
			matchSrc = matchSrc.replace(/S/g, escSeparator);
			matchSrc = matchSrc.replace(/D/g, escDelimiter);
			match = new RegExp(matchSrc, 'gm');

			// put on your fancy pants...
			// process control chars individually, use look-ahead on non-control chars
			csv.replace(match, function (m0) {
				if(exit) {
					return;
				}
				switch (state) {
					// the start of a value
					case 0:
						// null last value
						if (m0 === separator) {
							value += '';
							endOfValue();
							break;
						}
						// opening delimiter
						if (m0 === delimiter) {
							state = 1;
							break;
						}
						// null last value
						if (/^(\r\n|\n|\r)$/.test(m0)) {
							endOfValue();
							endOfEntry();
							break;
						}
						// un-delimited value
						value += m0;
						state = 3;
						break;

					// delimited input
					case 1:
						// second delimiter? check further
						if (m0 === delimiter) {
							state = 2;
							break;
						}
						// delimited data
						value += m0;
						state = 1;
						break;

					// delimiter found in delimited input
					case 2:
						// escaped delimiter?
						if (m0 === delimiter) {
							value += m0;
							state = 1;
							break;
						}
						// null value
						if (m0 === separator) {
							endOfValue();
							break;
						}
						// end of entry
						if (/^(\r\n|\n|\r)$/.test(m0)) {
							endOfValue();
							endOfEntry();
							break;
						}
						// broken paser?
						throw new Error('CSVDataError: Illegal State [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');

					// un-delimited input
					case 3:
						// null last value
						if (m0 === separator) {
							endOfValue();
							break;
						}
						// end of entry
						if (/^(\r\n|\n|\r)$/.test(m0)) {
							endOfValue();
							endOfEntry();
							break;
						}
						if (m0 === delimiter) {
						// non-compliant data
							throw new Error('CSVDataError: Illegal Quote [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
						}
						// broken parser?
						throw new Error('CSVDataError: Illegal Data [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
					default:
						// shenanigans
						throw new Error('CSVDataError: Unknown State [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
				}
				//console.log('val:' + m0 + ' state:' + state);
			});

			// submit the last entry
			// ignore null last line
			if(entry.length !== 0) {
				endOfValue();
				endOfEntry();
			}

			return data;
		}
		export function SplitLines (csv: any, options: any) {
			// cache settings
			var separator = options.separator;
			var delimiter = options.delimiter;

			// set initial state if it's missing
			if(!options.state.rowNum) {
				options.state.rowNum = 1;
			}

			// clear initial state
			var entries = [];
			var state = 0;
			var entry = '';
			var exit = false;

			function endOfLine() {
				// reset the state
				state = 0;
				
				// if 'start' hasn't been met, don't output
				if(options.start && options.state.rowNum < options.start) {
					// update global state
					entry = '';
					options.state.rowNum++;
					return;
				}
				
				if(options.onParseEntry === undefined) {
					// onParseEntry hook not set
					entries.push(entry);
				} else {
					var hookVal = options.onParseEntry(entry, options.state); // onParseEntry Hook
					// false skips the row, configurable through a hook
					if(hookVal !== false) {
						entries.push(hookVal);
					}
				}

				// cleanup
				entry = '';

				// if 'end' is met, stop parsing
				if(options.end && options.state.rowNum >= options.end) {
					exit = true;
				}
				
				// update global state
				options.state.rowNum++;
			}

			// escape regex-specific control chars
			var escSeparator = RegExpEscape(separator);
			var escDelimiter = RegExpEscape(delimiter);

			// compile the regEx str using the custom delimiter/separator
			var match = /(D|S|\n|\r|[^DS\r\n]+)/;
			var matchSrc = match.source;
			matchSrc = matchSrc.replace(/S/g, escSeparator);
			matchSrc = matchSrc.replace(/D/g, escDelimiter);
			match = new RegExp(matchSrc, 'gm');

			// put on your fancy pants...
			// process control chars individually, use look-ahead on non-control chars
			csv.replace(match, function (m0) {
				if(exit) {
					return;
				}
				switch (state) {
					// the start of a value/entry
					case 0:
						// null value
						if (m0 === separator) {
							entry += m0;
							state = 0;
							break;
						}
						// opening delimiter
						if (m0 === delimiter) {
							entry += m0;
							state = 1;
							break;
						}
						// end of line
						if (m0 === '\n') {
							endOfLine();
							break;
						}
						// phantom carriage return
						if (/^\r$/.test(m0)) {
							break;
						}
						// un-delimit value
						entry += m0;
						state = 3;
						break;

					// delimited input
					case 1:
						// second delimiter? check further
						if (m0 === delimiter) {
							entry += m0;
							state = 2;
							break;
						}
						// delimited data
						entry += m0;
						state = 1;
						break;

					// delimiter found in delimited input
					case 2:
						// escaped delimiter?
						var prevChar = entry.substr(entry.length - 1);
						if (m0 === delimiter && prevChar === delimiter) {
							entry += m0;
							state = 1;
							break;
						}
						// end of value
						if (m0 === separator) {
							entry += m0;
							state = 0;
							break;
						}
						// end of line
						if (m0 === '\n') {
							endOfLine();
							break;
						}
						// phantom carriage return
						if (m0 === '\r') {
							break;
						}
						// broken paser?
						throw new Error('CSVDataError: Illegal state [Row:' + options.state.rowNum + ']');

					// un-delimited input
					case 3:
						// null value
						if (m0 === separator) {
							entry += m0;
							state = 0;
							break;
						}
						// end of line
						if (m0 === '\n') {
							endOfLine();
							break;
						}
						// phantom carriage return
						if (m0 === '\r') {
							break;
						}
						// non-compliant data
						if (m0 === delimiter) {
							throw new Error('CSVDataError: Illegal quote [Row:' + options.state.rowNum + ']');
						}
						// broken parser?
						throw new Error('CSVDataError: Illegal state [Row:' + options.state.rowNum + ']');
					default:
						// shenanigans
						throw new Error('CSVDataError: Unknown state [Row:' + options.state.rowNum + ']');
				}
				//console.log('val:' + m0 + ' state:' + state);
			});

			// submit the last entry
			// ignore null last line
			if(entry !== '') {
				endOfLine();
			}

			return entries;
		}
		export function ParseEntry (csv: any, options: any) {
			// cache settings
			var separator = options.separator;
			var delimiter = options.delimiter;
			
			// set initial state if it's missing
			if(!options.state.rowNum) {
				options.state.rowNum = 1;
			}
			if(!options.state.colNum) {
				options.state.colNum = 1;
			}

			// clear initial state
			var entry = [];
			var state = 0;
			var value = '';

			function endOfValue() {
				if(options.onParseValue === undefined) {
					// onParseValue hook not set
					entry.push(value);
				} else {
					var hook = options.onParseValue(value, options.state); // onParseValue Hook
					// false skips the value, configurable through a hook
					if(hook !== false) {
						entry.push(hook);
					}
				}
				// reset the state
				value = '';
				state = 0;
				// update global state
				options.state.colNum++;
			}

			// checked for a cached regEx first
			if(!options.match) {
				// escape regex-specific control chars
				var escSeparator = RegExpEscape(separator);
				var escDelimiter = RegExpEscape(delimiter);
				
				// compile the regEx str using the custom delimiter/separator
				var match = /(D|S|\n|\r|[^DS\r\n]+)/;
				var matchSrc = match.source;
				matchSrc = matchSrc.replace(/S/g, escSeparator);
				matchSrc = matchSrc.replace(/D/g, escDelimiter);
				options.match = new RegExp(matchSrc, 'gm');
			}

			// put on your fancy pants...
			// process control chars individually, use look-ahead on non-control chars
			csv.replace(options.match, function (m0) {
				switch (state) {
					// the start of a value
					case 0:
						// null last value
						if (m0 === separator) {
							value += '';
							endOfValue();
							break;
						}
						// opening delimiter
						if (m0 === delimiter) {
							state = 1;
							break;
						}
						// skip un-delimited new-lines
						if (m0 === '\n' || m0 === '\r') {
							break;
						}
						// un-delimited value
						value += m0;
						state = 3;
						break;

					// delimited input
					case 1:
						// second delimiter? check further
						if (m0 === delimiter) {
							state = 2;
							break;
						}
						// delimited data
						value += m0;
						state = 1;
						break;

					// delimiter found in delimited input
					case 2:
						// escaped delimiter?
						if (m0 === delimiter) {
							value += m0;
							state = 1;
							break;
						}
						// null value
						if (m0 === separator) {
							endOfValue();
							break;
						}
						// skip un-delimited new-lines
						if (m0 === '\n' || m0 === '\r') {
							break;
						}
						// broken paser?
						throw new Error('CSVDataError: Illegal State [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');

					// un-delimited input
					case 3:
						// null last value
						if (m0 === separator) {
							endOfValue();
							break;
						}
						// skip un-delimited new-lines
						if (m0 === '\n' || m0 === '\r') {
							break;
						}
						// non-compliant data
						if (m0 === delimiter) {
							throw new Error('CSVDataError: Illegal Quote [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
						}
						// broken parser?
						throw new Error('CSVDataError: Illegal Data [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
					default:
						// shenanigans
						throw new Error('CSVDataError: Unknown State [Row:' + options.state.rowNum + '][Col:' + options.state.colNum + ']');
				}
				//console.log('val:' + m0 + ' state:' + state);
			});

			// submit the last value
			endOfValue();

			return entry;
		}
	}
	namespace Helpers {
		export function CollectPropertyNames (objects: Object): string[] {
			let props = [];
			for (let o in objects) {
				if (objects.hasOwnProperty(o)) {
					for (var prop in objects[o]) {
						if (objects[o].hasOwnProperty(prop) &&
								~props.indexOf(prop) &&
								(typeof objects[o][prop] !== 'function')) {
							props.push(prop);
						}
					}
				}
			}
			return props;
		}
	}

	export function ToArray(csv: string, options: ReaderOptions = new ReaderOptions()) {
		let entry = Parsers.ParseEntry(csv, options);
		// push the value to a callback if one is defined
		if(!options.callback) {
			return entry;
		} else {
			options.callback('', entry);
		}
	}
	export function ToArrays(csv: string, options: ReaderOptions = new ReaderOptions()) {
		// onPreParse hook
		if(options.onPreParse !== undefined) {
			options.onPreParse(csv, options.state);
		}
		// parse the data
		let data: string[] = Parsers.Parse(csv, options);
		// onPostParse hook
		if(options.onPostParse !== undefined) {
			options.onPostParse(data, options.state);
		}

		// push the value to a callback if one is defined
		if(!options.callback) {
			return data;
		} else {
			options.callback('', data);
		}
	}
	export function ToObjects(csv: string, options: ReaderOptions = new ReaderOptions()): string[] {
		const data = [];
		
		// fetch the headers
		var headerOptions = {
			delimiter: options.delimiter,
			separator: options.separator,
			start: 1,
			end: 1,
			state: {
				rowNum:1,
				colNum:1
			}
		};

		// onPreParse hook
		if(options.onPreParse !== undefined) {
			options.onPreParse(csv, options.state);
		}

		// parse the csv
		let headerLine = Parsers.SplitLines(csv, headerOptions);
		let headers = ToArray(headerLine[0], options);

		// fetch the data
		let lines = Parsers.SplitLines(csv, options);

		// reset the state for re-use
		options.state.colNum = 1;
		if(headers){
			options.state.rowNum = 2;
		} else {
			options.state.rowNum = 1;
		}
		
		// convert data to objects
		for(var i=0, len=lines.length; i<len; i++) {
			var entry = ToArray(lines[i], options);
			var object = {};
			for(var j=0; j <headers.length; j++) {
				object[headers[j]] = entry[j];
			}
			if (options.transform !== undefined) {
				data.push(options.transform.call(undefined, object));
			} else {
				data.push(object);
			}
			
			// update row state
			options.state.rowNum++;
		}
		// onPostParse hook
		if(options.onPostParse !== undefined) {
			options.onPostParse(data, options.state);
		}

		// push the value to a callback if one is defined
		if(!options.callback) {
			return data;
		} else {
			options.callback('', data);
		}
	}
	export function FromArrays(arrays: Array<Array<any>>, options: ReaderOptions = new ReaderOptions()): string {
		let output = '',
				line,
				lineValues,
				i, j;

		for (i = 0; i < arrays.length; i++) {
			line = arrays[i];
			lineValues = [];
			for (j = 0; j < line.length; j++) {
				var strValue = (line[j] === undefined || line[j] === null) ? '' : line[j].toString();
				if (strValue.indexOf(options.delimiter) > -1) {
					strValue = strValue.replace(options.delimiter, options.delimiter + options.delimiter);
				}

				var escMatcher = '\n|\r|S|D';
				escMatcher = escMatcher.replace('S', options.separator);
				escMatcher = escMatcher.replace('D', options.delimiter);

				if (strValue.search(escMatcher) > -1) {
					strValue = options.delimiter + strValue + options.delimiter;
				}
				lineValues.push(strValue);
			}
			output += lineValues.join(options.separator) + '\r\n';
		}

		// push the value to a callback if one is defined
		if(!options.callback) {
			return output;
		} else {
			options.callback('', output);
		}
	}
	export function FromObjects(objects: Array<Object>, options: ReaderOptions = new ReaderOptions()): string {
		if (options.transform !== undefined) {
			var origObjects = objects;
			objects = [];

			var i;
			for (i = 0; i < origObjects.length; i++) {
				objects.push(options.transform.call(undefined, origObjects[i]));
			}
		}

		var props = Helpers.CollectPropertyNames(objects);

		if (options.sortOrder === 'alpha') {
			props.sort();
		} // else {} - nothing to do for 'declare' order

		if (options.manualOrder.length > 0) {

			var propsManual = [].concat(options.manualOrder);
			var p;
			for (p = 0; p < props.length; p++) {
				if (propsManual.indexOf( props[p] ) < 0) {
					propsManual.push( props[p] );
				}
			}
			props = propsManual;
		}

		var o, p, line, output = [], propName;
		if (options.headers) {
			output.push(props);
		}

		for (o = 0; o < objects.length; o++) {
			line = [];
			for (p = 0; p < props.length; p++) {
				propName = props[p];
				if (propName in objects[o] && typeof objects[o][propName] !== 'function') {
					line.push(objects[o][propName]);
				} else {
					line.push('');
				}
			}
			output.push(line);
		}

		// push the value to a callback if one is defined
		return FromArrays(output, options);
	}
}
