// const accountBalanceEl = document.getElementById('account-balance');
// const totalDonationEl = document.getElementById('total-donation');

function getInputFieldValueById(id){
 const inputValue = document.getElementById(id).value;
 const inputNumber = parseFloat(inputValue);
 return inputNumber;
}
function getTextFieldValueById(id){
 const textValue = document.getElementById(id).innerText;
 const textNumber = parseFloat(textValue);
 return textNumber;
}

function showSectionById(id) {
  document.getElementById('donate-part').classList.add('hidden');
  document.getElementById('history-part').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}

// donate balance
document.getElementById('btn-donate-money')
.addEventListener('click', function (event){
  event.preventDefault();

const donateAmount = getInputFieldValueById('input-donate');
const balance = getTextFieldValueById('account-balance');
if (isNaN(donateAmount) || donateAmount ==='' || donateAmount > balance){
  
  alert('Invalid donation')}else{
    const newBalance = balance + donateAmount;
    document.getElementById('account-balance').innerHTML = newBalance;
  }
  // History
  const div = document.getElementById('div');
  div.classList.add('bg-yellow-300');
  div.innerHTML =`
  <h4 class = "text-2xl font-bold">Donation</h4>
  <p>${donateAmount} taka is donated fo flood in Noakhali, Bangladesh</p>`
  
}) 

// donate balance
document.getElementById('btn-donate-money')
.addEventListener('click', function (event){
  event.preventDefault();

const donateAmount = getInputFieldValueById('input-donate');


  const iBalance = getTextFieldValueById('i-balance');
  const newIBalance = iBalance - donateAmount;
  document.getElementById('i-balance').innerHTML = newIBalance;

}) 

