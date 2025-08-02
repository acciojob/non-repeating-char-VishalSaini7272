function firstNonRepeatedChar(str) {
 // Write your code here
	for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (str.indexOf(ch) === str.lastIndexOf(ch)) {
      return ch;
    }
  }
  return null;
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
