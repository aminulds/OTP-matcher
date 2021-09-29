// Generate Pin
const warningMessages = document.querySelectorAll('.notify');
for (i = 0; i < warningMessages.length; i++){
    warningMessages[i].remove();
}

// Generate Pin
function pin(){
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp;
}

document.getElementById('otpGenerateBtn').addEventListener('click', function(){
    const otp = pin();
    document.getElementById('otpDisplay').value = otp;
})

// Digit input
function digit(inputDigit){
    document.getElementById('keyDisplay').value += inputDigit;
}

// Cancel Input
function cancelInput(){
    document.getElementById('keyDisplay').value = '';
}

// Remove Digit
function removeDigit(){
    let keyDisplay = document.getElementById('keyDisplay').value;
    keyDisplay =  keyDisplay.slice(0, -1);
    document.getElementById('keyDisplay').value = keyDisplay;
}