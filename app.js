//Question 1
//What does the following code return?

let answer1 = new Set([1,1,2,2,3,4])
//{1,2,3,4}

//============================////============================////============================//
//Question 2
//What does the following code return?

let answer2 = [...new Set("referee")].join("")
//['r','e','f']

//============================////============================////============================//
//Questions 3
//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//m = {[1,2,3], false}

//correct answer
    // 0: {Array(3) => true}
    // 1: {Array(3) => false}

//============================////============================////============================//
//Write a function called hasDuplicate which accepts an array
// and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => (new Set(arr).size !== arr.length ? true : false)

let answer3 = hasDuplicate([1,3,2,1]) // true
let answer4 = hasDuplicate([1,5,-1,4]) // false

//============================////============================////============================//
//Write a function called vowelCount which accepts a string and returns a map
// where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
    let arr = Array.from(str);
    let answer = new Map();
    let vowels = 'aeiou'
    let arrVowels = arr.filter((vowel) => (vowels.includes(vowel) ? true : false));
    for (let letter of arrVowels){
        let count = 0
        for (let char of arrVowels){
            if (letter === char) count++;
        }
        //my first attempt that didn't work
        // let count = arrVowels.reduce((sum, char) => {
        //     if (letter === char) {
        //         console.log(sum)
        //         return sum += 1;
        //     }
        // }, 0);
        answer.set(letter, count);
    }
    return answer;
}

let answer5 = vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
let answer6 = vowelCount('Colt') // Map { 'o' => 1 }

//solution provided uses more of the map methods


// function isVowel(char){
//     return "aeiou".includes(char);
//   }

// function vowelCount(str){
//     const vowelMap = new Map();
//     for(let char of str){
//       let lowerCaseChar = char.toLowerCase()
//       if(isVowel(lowerCaseChar)){
//         if(vowelMap.has(lowerCaseChar)){
//           vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//         } else {
//           vowelMap.set(lowerCaseChar, 1);
//         }
//       }
//     }
//     return vowelMap;
//   }

//============================////============================////============================//