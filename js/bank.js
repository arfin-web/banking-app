//Deposit Count
document.getElementById('depositButton').addEventListener('click', function () {
    const depositField = document.getElementById('depositInput');
    const depositValue = depositField.value;

    const dipositAmount = document.getElementById('diposit-amount');
    const dipositAmountText = dipositAmount.innerText;
    const dipositAmountValue = parseFloat(dipositAmountText);

    const newDipositAmountValue = parseFloat(depositValue);
    dipositAmount.innerText = dipositAmountValue + newDipositAmountValue;
    

    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountText = balanceAmount.innerText;
    const balanceAmountValue = parseFloat(balanceAmountText);

    balanceAmount.innerText = balanceAmountValue + newDipositAmountValue;

    depositField.value = '';
})


//Withdraw Count
document.getElementById('withdrawButton').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdrawInput');
    const withdrawText = withdrawField.value;
    const withdrawValue = parseFloat(withdrawText);

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawAmount.innerText;
    const withdrawAmountvalue = parseFloat(withdrawAmountText);

    withdrawAmount.innerText = withdrawValue + withdrawAmountvalue;

    const newBalance = document.getElementById('balance-amount');
    const newBalanceText = newBalance.innerText;
    const newBalanceValue = parseFloat(newBalanceText);

    newBalance.innerText = newBalanceValue - withdrawValue;

    withdrawField.value = '';
})