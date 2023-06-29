const ELEM_PIG_LATIN =  document.getElementsByClassName("input_box")[0];
const ELEM_PIG_OUTPUT = document.getElementsByClassName("output_box")[0];
let vowels = "aeiou";

function translatePigLatin() {
    const userPigLatinInput = ELEM_PIG_LATIN.value;
    let words = userPigLatinInput.split(" ");
   
    for(let word_idx = 0; word_idx < words.length; word_idx++) {
        const word = words[word_idx].toLowerCase();
        if (word.length < 3) continue;

        for(let char_idx = 0; char_idx < word.length; char_idx++) {
                
            if(vowels.includes(word[char_idx])) {
                words[word_idx] = word.substring(char_idx, word.length) + word.substring(0, char_idx) + "ay";
                break;
            } 
        }

    }
        
    let new_sentence = words.join(" ")
    ELEM_PIG_OUTPUT.innerHTML = new_sentence
}