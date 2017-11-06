// Q: Reverse vowels in input string
let string = "a,e,i,o,u";

function reverse(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

reverse(string);
// "u,o,i,e,a"
