document.getElementById('add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById("amount-num").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin-number').value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance); 

    if(parseInt(pin)===1234){
        const sum = convertedAmount + convertedMainBalance;
        document.getElementById('main-balance').innerText = sum;
    }
    else{
        console.assertlog('pin thik nai')
    }
})