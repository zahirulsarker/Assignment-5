
// donate balance
document.getElementById('btn-donate-money-q')
.addEventListener('click', function (event){
  event.preventDefault();

const donateAmount = getInputFieldValueById('input-donate-q');
const balance = getTextFieldValueById('account-balance-q');
if (isNaN(donateAmount) || donateAmount ==='' || donateAmount > balance){
  
  alert('Invalid donation')}else{
    const newBalance = balance + donateAmount;
    document.getElementById('account-balance-q').innerHTML = newBalance;
  }
  
  
}) 

// donate balance
document.getElementById('btn-donate-money-q')
.addEventListener('click', function (event){
  event.preventDefault();

const donateAmount = getInputFieldValueById('input-donate-q');


  const iBalance = getTextFieldValueById('i-balance');
  const newIBalance = iBalance - donateAmount;
  document.getElementById('i-balance').innerHTML = newIBalance;
  const p = document.createElement('p');
    const time = new Date();
    p.innerText = `${donateAmount} taka is donated for quota movement victims in Bangladesh.
    ${time}`
    document.getElementById('history-container').appendChild(p);
    p.style.border = "1px solid black"

}) 
