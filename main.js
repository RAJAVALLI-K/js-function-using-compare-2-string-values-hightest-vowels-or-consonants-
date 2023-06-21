// campare two string in consonants 

let str = prompt("Enter a String:");
let str1 = prompt("Enter a String:");

function consonantsCount(str) {
    let vowels = 0, consonants = 0;
    if (str.length > str1.length) {
        console.log(str);
        for (let i = 0; i < str.length; i++) {
            let ele = str[i];
            if (ele == "a" || ele == "i" || ele == "o" || ele == "u" || ele == "e" || ele == "A" || ele == "E" || ele == "I" || ele == "O" || ele == "U") {
                vowels += 1;
            }
            else {
                consonants += 1;
            }
        }
    }
    else {
        for (let j = 0; j < str1.length; j++) {
            let ele = str1[j];
            if (ele == "a" || ele == "i" || ele == "o" || ele == "u" || ele == "e" || ele == "A" || ele == "E" || ele == "I" || ele == "O" || ele == "U") {
                vowels += 1;
            }
            else {
                consonants += 1;
            }
        }
        console.log(str1);
    }
    console.log(`It is a string is vowels count: ${vowels}`);
    console.log(`It is a string is consonants count: ${consonants}`);
}
consonantsCount(str);
