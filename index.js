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

