// William Chapman
// 2022

// Find the code box
var codeBox = document.getElementById("code");

// If the USCIS webpage draws focus from the box for a popup
var hasGainedFocus = 0;
var hasGainedFocusLimit = 1;

// If this loads too quickly on a computer that is slow to reload
//      the webpage, reattempts may be made
var reattemptWait = 1000;

// If no pop-up is present and the user clicks elsewhere, drawing
//      focus away from the box, then do not automatically re-focus
var escape = false;



// Main method for focusing on the box
function FocusOn2FaBox()
{
    // If the box exists then focus on it, otherwise fail
    if (codeBox != null)
    {
        if (hasGainedFocus <= hasGainedFocusLimit && !escape)
        {
            codeBox.focus();
            codeBox.addEventListener("blur", FocusOn2FaBox);
            console.log("Auto focused on code box!");
            hasGainedFocus++;
        }
        else
        {
            console.log("Already auto focused on code box too many times! (or escape was true)");
        }
        
    }
    else
    {
        console.log("Could not find box to auto-focus!");
        
        // Reattempt to locate the box
        setTimeout(SetUpAndRun, reattemptWait);
    }
}


// Initial trigger that may need to be re-run if webpage is slow to load
function SetUpAndRun()
{
    // Find the code box
    codeBox = document.getElementById("code");

    FocusOn2FaBox();
}

// Sets flag to stop auto refocus (e.g: because of user input)
function EscapeAutoFocus()
{
    escape = true;
}

// Trigger the trigger
window.addEventListener('load', SetUpAndRun);

// If the user draws focus, mark escape to stop auto refocus
window.addEventListener('mousedown', EscapeAutoFocus, true);