const ELEM_PIG_LATIN =  document.getElementsByClassName("input_box")[0];
const ELEM_PIG_OUTPUT = document.getElementsByClassName("output_box")[0];
let vowels = "aeiou";
let allvalidchar= 'asdfghjklmnbvcxzqwertyuiopQWERTYUIOPLKJHGFDSAZXCVBNM '
let momutc = false
let beforestart = 0
function translatePigLatin() {
    beforestart = beforestart + 1
    const userPigLatinInput = ELEM_PIG_LATIN.value;
    let sanitizedInput = "";
    for (let i = 0; i < userPigLatinInput.length; i++) {
        if (allvalidchar.includes(userPigLatinInput[i])) {
            sanitizedInput += userPigLatinInput[i];
        }
    }

    let words = sanitizedInput.split(" ");
   
    for(let word_idx = 0; word_idx < words.length; word_idx++) {
        const word = words[word_idx].toLowerCase();
        if (word === 'momit')
            momutc = true
        if (word.length < 3) continue;

        for(let char_idx = 0; char_idx < word.length; char_idx++) {
                                                    
            if(vowels.includes(word[char_idx])) {
                words[word_idx] = word.substring(char_idx, word.length) + word.substring(0, char_idx) + "ay";
                break;
            } 
        }

    }
        
    let new_sentence = words.join(" ")
    if (momutc === true) {
        new_sentence = "Why did you momit?";
    }
    ELEM_PIG_OUTPUT.innerHTML = new_sentence
    
    console.log(beforestart)
    if (beforestart >= 10) {
        alert('Your free trial of translates have expired.');
        ELEM_PIG_OUTPUT.innerHTML = ''
    }
}
