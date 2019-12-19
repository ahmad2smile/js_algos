const PLACEHOLDER = "-";

const reverseBraced = bracedChar =>
	bracedChar.reverse().map(c => {
		if (c === "(") {
			return ")";
		}
		if (c === ")") {
			return "(";
		}

		return c;
	});

const trimBraces = str => {
	const chars = str.split("");
	const strLength = chars.length;

	// Remove start and end braces if exits
	if (strLength && chars[0] === "(" && chars[strLength - 1] === ")") {
		return chars.slice(1, strLength - 1).join("");
	}

	return str;
};

const combineStringParts = (bracedStr, startEndStr) => {
	const allPlaceholders = startEndStr.filter(c => c === PLACEHOLDER).join("");

	return startEndStr.join("").replace(allPlaceholders, bracedStr);
};

const processStringOnBraces = str => {
	let braces = 0;

	const bracedChar = [];
	const startEndStr = str
		.split("")
		.map(c => {
			if (c === "(") {
				braces += 1;
			}

			if (braces) {
				bracedChar.push(c);
			}

			if (c === ")") {
				braces = Math.max(0, (braces -= 1));
			}

			return braces ? PLACEHOLDER : c;
		})
		.filter(c => !(c === "(" || c === ")"));

	let bracedStr = trimBraces(reverseBraced(bracedChar).join(""));

	if (bracedStr.includes("(")) {
		bracedStr = processStringOnBraces(bracedStr);
	}

	return combineStringParts(bracedStr, startEndStr);
};

///////////////////////////////////
//Display Jorgan

process.stdout.write("\x1Bc");
console.log("foo(bar) =>", processStringOnBraces("foo(bar)"));
console.log("\n(bar) =>", processStringOnBraces("(bar)"));
console.log("\nfoo(bar)blim =>", processStringOnBraces("foo(bar)blim"));
console.log("\nfoo(foo(bar))blim =>", processStringOnBraces("foo(foo(bar))blim"));
console.log("\nfoo(foo(bar(xyz)))blim =>", processStringOnBraces("foo(foo(bar(xyz)))blim"));

//Display Jorgan
///////////////////////////////////
