document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(accountNumber.length === 11){
        if(parseInt(pinNumber)===1234){
            window.location.href = "./main.html"
        }
        else{
           alert('PIN thik nai')
        }
    }
    else{
       alert('please Enter valid Input Number')
    }
  });
