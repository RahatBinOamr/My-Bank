document.getElementById('Withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('user-withdrw');
    const newWithDrawAmountstring = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountstring);


    const WithdrawTotalElement = document.getElementById('total-withdrw');
    const preeviousWithDraweTotalString = WithdrawTotalElement.innerText;
    const previousWithDrawTotal = parseFloat(preeviousWithDraweTotalString);

    withdrawField.value = '';

    if(isNaN(newWithDrawAmount)){
        alert(' please Enter Amount Number ');
        return;
    }
    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanseTotalString = balanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBalanseTotalString);
    
    if(newWithDrawAmount > previousBlanceTotal){
        alert ('no no no ');
        return;
    }
    const currentWithDrawTotal = previousWithDrawTotal + newWithDrawAmount;
    WithdrawTotalElement.innerText = currentWithDrawTotal;

const newBalanceTotal = previousBlanceTotal - newWithDrawAmount;
balanceTotalElement.innerText = newBalanceTotal;
})