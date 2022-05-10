// William Chapman
// 2022

// Find the code box
var codeBox = document.getElementById("code");

// If the USCIS webpage draws focus from the box for a popup
var hasGainedFocus = 0;
var hasGainedFocusLimit = 1;

// If this loads too quickly on a computer that is slow to reload the webpage, reattempts may be made
var reattemptWait = 1000;



// Main method for focusing on the box
function FocusOn2FaBox()
{
    // If the box exists then focus on it, otherwise fail
    if (codeBox != null)
    {
        if (hasGainedFocus <= hasGainedFocusLimit)
        {
            codeBox.focus();
            codeBox.addEventListener("blur", FocusOn2FaBox);
            console.log("Auto focused on code box!");
            hasGainedFocus++;
        }
        else
        {
            console.log("Already auto focused on code box too many times!");
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

// Trigger the trigger
window.addEventListener('load', SetUpAndRun);