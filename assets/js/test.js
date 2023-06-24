const ELEM_INPUT_BOX = document.getElementsByClassName("test_input")[0]
const ELEM_MAIN_TITLE = document.getElementsByClassName("main_title")[0]

function testButtonClicked() {
    const VAL = ELEM_INPUT_BOX.value.trim();
    if (VAL == "") return;

    ELEM_MAIN_TITLE.innerHTML = "Welcome to my "  + VAL + "!"
   // window.open( "https://www." + VAL + ".com" )
}
function testButtonClickedEdu() {
    const VALEDU = ELEM_INPUT_BOX.value.trim();
    if (VALEDU == "") return;

    ELEM_MAIN_TITLE.innerHTML = "Welcome to my "  + VALEDU + "!"
   // window.open( "https://www." + VALEDU + ".edu" )
}
function gotoDepths() {
    location.replace("https:/meerthepotato.github.io/thedepths/")
}

// .value  is how you get the content of a input element