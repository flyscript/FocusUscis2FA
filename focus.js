// William Chapman
// 2022

// USCIS will flash up a prompt to enter your 2FA code, which stupidly draws focus from the actual 2FA code box
var millisecondDelay = 250;

function focusOn2faBox()
{
    var codeBox = document.getElementById("code");

    // If the box exists then focus on it, otherwise fail
    if (codeBox != null) {
        codeBox.focus();
        console.log("Auto focused on code box!");
    } else {
        console.log("Could not find box to auto-focus!");
    }
}

// Cheap and cheerful, easily breakable on a super slow machine, but I didn't want
//  to bother waiting for an element that might not exist if they change their site
setTimeout(focusOn2faBox, millisecondDelay);