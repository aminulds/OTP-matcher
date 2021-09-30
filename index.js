//inputField manual Disable
function inpDisable(inpSelector){
    const inpDisplay = document.getElementById(inpSelector);
    inpDisplay.disabled = true;
    inpDisplay.style.backgroundColor = '#3D4153';
    inpDisplay.style.cursor = 'not-allowed';
}
inpDisable('otpDisplay');
inpDisable('keyDisplay');

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

// Submit OTP
let otpLimit = 3;
let actionLeft = document.querySelector('.action-left'); // Limit otp Submit

document.getElementById('otpSubmit').addEventListener('click', function(){
    const generateOtp = parseInt(document.getElementById('otpDisplay').value);
    const inputOtp =  parseInt(document.getElementById('keyDisplay').value);

    const warningMessages = document.querySelectorAll('.notify');
    if (generateOtp === inputOtp){
        warningMessages[1].style.display = 'block';
        warningMessages[0].style.display = 'none';
        actionLeft.style.display = 'none';
    }
    else{
        warningMessages[0].style.display = 'block';
        warningMessages[1].style.display = 'none';

        // otp Submit limit
        if (otpLimit >= 1){
            actionLeft.innerHTML = otpLimit + ' try left!';
            actionLeft.style.display = 'block';
        }
        else{
            const numbersPad = document.querySelectorAll('.button');
            for (i = 0; i < numbersPad.length; i++){
                numbersPad[i].style.cursor = 'not-allowed';
                numbersPad[i].style.color = '#948d8d';
            }

            actionLeft.innerHTML = '0 try left!';
            const otpSubmit = document.getElementById('otpSubmit');
            otpSubmit.disabled = true;
            otpSubmit.style.backgroundColor = '#606897';
            otpSubmit.style.color = 'gray';
            otpSubmit.style.cursor = 'not-allowed';
            //remove warning message
            warningMessages[0].style.display = 'none';
        }
        
        otpLimit -= 1;


    }
    

});