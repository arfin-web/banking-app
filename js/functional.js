function userInput(amountId) {
    const inputField = document.getElementById(amountId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);

    inputField.value = '';

    return inputValue;
}

function addAmount(addAmountId) {
    const addAmountField = document.getElementById(addAmountId);
    const addAmountText = addAmountField.innerText;
    const addAmountValue = parseFloat(addAmountText);

    return addAmountValue;
}

document.getElementById('depositButton').addEventListener('click', function () {
    const deposit = userInput('depositInput');
    const addDeposit = addAmount('diposit-amount');
    const addBalance = addAmount('balance-amount');

    document.getElementById('diposit-amount').innerText = deposit + addDeposit;
    document.getElementById('balance-amount').innerText = addBalance + deposit;
})

document.getElementById('withdrawButton').addEventListener('click', function () {
    const withdraw = userInput('withdrawInput');
    const addWithdraw = addAmount('withdraw-amount');
    const minusBalance = addAmount('balance-amount');

    document.getElementById('withdraw-amount').innerText = withdraw + addWithdraw;
    document.getElementById('balance-amount').innerText = minusBalance - withdraw;
})