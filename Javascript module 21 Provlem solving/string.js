// const name ="naeem";
// const nameLent=name.length;
// console.log(nameLent);


function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}


const inputString = 'There are five different vowel letters: A, E, I, O and U. Vowels are very common in the English language as they can be found in almost every word and syllable. A consonant is any letter of the alphabet other than the vowels (a, e, i, o, u). Consonants are all non-vowel sounds in the English alphabet.';
const counts = countVowelsAndConsonants(inputString);
console.log(counts); // Output: { vowels: 3, consonants: 7 }
