// Iteration 1: Names and Input
const hacker1 = 'Travis Bickle';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Iris';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let driverNameLength = hacker1.length;
let navigatorNameLength = hacker2.length;

if (driverNameLength > navigatorNameLength) {
    console.log(`The driver has the longest name, it has ${driverNameLength} characters.`);
} else if (driverNameLength === navigatorNameLength) {
    console.log(`Wow, you both have equally long names, ${navigatorNameLength} characters!`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`);
}

// Iteration 3: Loops 

// 3.1 - separete the name with a space between each uppercased letter //
let spaceUpperName = '';
let upperCaseName = hacker1.toUpperCase();

for (let index = 0; index < driverNameLength; index++) {
    spaceUpperName += upperCaseName[index];
    spaceUpperName += ' ';
}

// slicing the last space i concatenated to the string, in order to have only the name of the driver
spaceUpperName = spaceUpperName.slice(0, spaceUpperName.length - 1);
console.log(spaceUpperName);

// or shorter verison of 3.1 without loop
upperCaseName = hacker1.toUpperCase();
letterArray = upperCaseName.split(''); // using the argument empty string to separate a string into an array of characters
spaceUpperName = letterArray.join(' '); // join method with a space in order to join all the character with a space between them 


//3.2 - revert the name of the navigator //
let reverseName = '';
const maxIndexName = navigatorNameLength - 1;

for (let i = maxIndexName; i >= 0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName);

// or faster way with function reverse from arrays 

// 1. create an array of characters 
let charArray = hacker2.split("");
// 2. reverse the array using the function reverse 
let reverseArray = charArray.reverse();
// 3. make it back to a string 
let reverseString = reverseArray.join(""); // by default join will put the characters together by comma, so if its specified a empty string it will put the char all togeter
console.log(reverseString);

// bonus make it into a function 
function reversingStrings(mystring) {
    let charArray = mystring.split("");
    let reverseArray = charArray.reverse();
    let reverseString = reverseArray.join("");
    return reverseString;
}
console.log(reversingStrings(hacker2));

//3.3 Compare lexographically strings 

let hacker1Upper, hacker2Upper;
hacker1Upper = hacker1.toUpperCase();
hacker2Upper = hacker2.toUpperCase();

if (hacker1Upper < hacker2Upper) {
    // if the ascII value for the first string is smaller that the second string its because 
    // it comes first lexographically
    console.log("The driver's name goes first.");
} else if (hacker1Upper > hacker2Upper) {
    // if the ascII value for the first string is bigger that the second string then 
    // the first string comes after lexographically
    console.log("Yo, the navigator goes first definitely.");
} else {
    // if the ascII value is the same then the the string is the same
    console.log("What?! You both have the same name?");
}
// comparing strings using the greatter or smaller operand checks in the ASCII table what string's characters 
// have the smallest value in bit format taking into account the lenght of the string 

//REFERENCE: https://masteringjs.io/tutorials/fundamentals/compare-strings 


// 3.3 using the method a.localeCompare() //

// if it returns a positive number the string we apply the function (the first one) comes after
// if returns a zero the strings are equal
// if the value is negative the string we apply the function (the first one ) comes before

// main part :
//console.log(hacker1Upper.localeCompare(hacker2Upper));

if (hacker1Upper.localeCompare(hacker2Upper) === -1) {
    console.log(` The driver's name goes first:
${hacker1Upper} comes before ${hacker2Upper} alphabeticly`)

} else if (hacker1Upper.localeCompare(hacker2Upper) === 1) {
    console.log(`Yo, the navigator goes first definitely:
${hacker2Upper} comes before ${hacker1Upper} alphabeticly`)

} else if (hacker1Upper.localeCompare(hacker2Upper) === 0) {
    console.log("What?! You both have the same name?");
}

// REFERENCE: https://riptutorial.com/javascript/example/5388/comparing-strings-lexicographically

// 3.3 ... if with patience re-write the localeCompare function based on my interpretation 
// of the lexographical order

// STARTING REFERENCE: https://www.techiedelight.com/character-to-ascii-code-javascript/
// TAKE INTO ACCOUNT THE LENGHT OF THE STRINGS TO COMPARE


//BONUS


//1.1
const myLorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in nisi scelerisque, rutrum est eget, blandit sem. Aenean lobortis eget tortor ut placerat. Nullam sed urna augue. Morbi ultrices tempus aliquet. Phasellus luctus consectetur laoreet. Phasellus luctus risus diam. Nulla vestibulum urna elit. Suspendisse ut sapien ut dui iaculis egestas. Etiam suscipit varius rutrum. Suspendisse nisi sem, faucibus at ultrices ut, porta nec leo. Donec neque tellus, semper id nulla nec, volutpat tincidunt augue. Duis vel augue at augue ultrices bibendum. Etiam dapibus purus laoreet arcu aliquam pharetra. Curabitur consequat quis felis eu imperdiet. Aenean pretium, enim sed dignissim tincidunt, justo mi dapibus nunc, non varius risus nulla eu enim.

Etiam maximus ac tortor et facilisis. Nullam enim nulla, dapibus semper tincidunt sed, scelerisque non turpis. Vestibulum blandit vitae urna id dignissim. In interdum arcu ligula, vel aliquam turpis pellentesque ut. Vestibulum eleifend tortor et nibh molestie, eu pellentesque est euismod. Duis commodo dolor eu odio commodo, eu fermentum ligula hendrerit. Maecenas ac purus blandit, feugiat lorem in, pellentesque felis. Mauris sollicitudin ut risus at fermentum. Nulla et efficitur tellus, a sagittis ex. Ut quis quam varius, pretium ante in, tempus justo. Nullam vitae tellus a elit rutrum consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean porta orci est. Sed ac nisi ut est ultrices ultrices. Mauris dapibus sapien urna, sit amet dapibus turpis ultricies quis. Nunc pharetra, ligula eget euismod placerat, velit risus blandit nisl, nec interdum ante mauris ut enim.

Praesent nibh est, gravida quis suscipit vitae, placerat a justo. Mauris quis nibh nibh. Donec fringilla blandit justo nec blandit. In et vehicula dui, non ultricies purus. Curabitur semper urna pretium urna tempor pulvinar. Suspendisse vitae nulla consequat, cursus ex sit amet, placerat neque. Proin sed enim non elit rutrum finibus. Nam quis ultricies dui. Integer sagittis est et erat rhoncus, vitae blandit dolor tempus. Ut vel orci a lectus malesuada ultricies finibus non risus. Nunc lectus nibh, porta id mi quis, cursus tempor turpis. Vivamus varius tellus at sem mollis, eu molestie tellus vulputate. Mauris vitae quam non urna vulputate eleifend.

`;


//1.2

// trim() string function removes all whitspaces and linebreaks from the begining and end of string 
function countWords(text) {
    const trimedText = text.trim();
    let numberOfWords = 0;
    for (let i = 0; i < trimedText.length; i++) {
        if (trimedText[i] === ' ' || trimedText[i] === '\n') {
            numberOfWords++;
        }
    }
    return numberOfWords + 1;
}

console.log(countWords(myLorem));


//1.3
function countEtWords(text, search) {
    // cleaning text
    let cleanText = text.replaceAll('.', '');
    cleanText = cleanText.replaceAll('\n', ' ');
    cleanText = cleanText.replaceAll(',', '');

    const trimedText = cleanText.trim();

    // looping array and checking how many et
    const myWordArray = trimedText.split(' ');
    let numberofEt = 0;

    myWordArray.forEach(word => {
        if (word === search) {
            numberofEt++;
        }
    })

    return numberofEt;
}
console.log(countEtWords(myLorem, 'et')); // 6


//BONUS 2


function checkPalindromes(text) {
    // regex expresion that locates everything that is not a number or a letter
    const re = RegExp('[^A-z0-9]', 'g');
    // the same as --> /[^a-z0-9]/g
    // g stands for global match 

    const textOneClean = text.replaceAll(re, '').toUpperCase();
    
    let revertText = '';
    const maxIndex = textOneClean.length - 1;
    for (let i = maxIndex; i >= 0 ; i--) {
        revertText += textOneClean[i];
    }

    if (textOneClean === revertText) {
        return true
    } else {
        return false
    }
}


// const someText = window.prompt("write some text: ");


const myArrayOfTexts = ["A man, a plan, a canal, Panama!", "Amor, Roma", "race car", "stack cats", "step on no pets", "taco cat", "put it up", "Was it a car or a cat I saw?", "No 'x' in Nixon"]

myArrayOfTexts.forEach(function(element) {
    if (checkPalindromes(element)) {
        console.log("the text is a palindrome");
    } else {
        console.log("the text is not a palindrome");
    }
})


