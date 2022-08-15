document.getElementById('Deposit').addEventListener('click',function(){
   const depositField = document.getElementById('user-deposite');
   const  newDepositeAmountstring = depositField.value;
   const newDepositeAmount = parseFloat(newDepositeAmountstring);
 const depositeTotalElement = document.getElementById('deposit-total');
 const previousDepositTotalString = depositeTotalElement.innerText;
 const previousDepositTotal = parseFloat (previousDepositTotalString);
 const currentDepositTotal = previousDepositTotal + newDepositeAmount;
 depositeTotalElement.innerText = currentDepositTotal;
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanseTotalString = balanceTotalElement.innerText;
const previousBlanceTotal = parseFloat(previousBalanseTotalString);
const currentBalanceTotal = previousBlanceTotal + newDepositeAmount;
balanceTotalElement.innerText = currentBalanceTotal;
 depositField.value = '';
})