
// donate balance
document.getElementById('btn-donate-money-f')
.addEventListener('click', function (event){
  event.preventDefault();

const donateAmount = getInputFieldValueById('input-donate-f');
const balance = getTextFieldValueById('account-balance-f');
if (isNaN(donateAmount) || donateAmount ==='' || donateAmount > balance){
  
  alert('Invalid donation')}else{
    const newBalance = balance + donateAmount;
    document.getElementById('account-balance-f').innerHTML = newBalance;
  }
  
  
}) 

// donate balance
document.getElementById('btn-donate-money-f')
.addEventListener('click', function (event){
  event.preventDefault();

const donateAmount = getInputFieldValueById('input-donate-f');


  const iBalance = getTextFieldValueById('i-balance');
  const newIBalance = iBalance - donateAmount;
  document.getElementById('i-balance').innerHTML = newIBalance;

}) 
