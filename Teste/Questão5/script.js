let str = "Heloo World";
let newStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}

document.write(newStr);