
// donate balance
document.getElementById('btn-donate-money-f')
.addEventListener('click', function (event){
  event.preventDefault();

const donateAmount = getInputFieldValueById('input-donate-f');
const balance = getTextFieldValueById('account-balance-f');
if (isNaN(donateAmount) || donateAmount ==='' || donateAmount > balance){
  
  alert('Invalid donation')
 
}else{
    const newBalance = balance + donateAmount;
    document.getElementById('account-balance-f').innerHTML = newBalance;
    const p = document.createElement('p');
    const time = new Date();
    p.innerText = `${donateAmount} taka is donated for flood in Feni, Bangladesh.
    ${time}`
    document.getElementById('history-container').appendChild(p);
    p.style.border = "1px solid black";
    p.style.padding = "4px 8px";
  }
 
  
}) 

// donate balance
// document.getElementById('btn-donate-money-f')
// .addEventListener('click', function (event){
//   event.preventDefault();

// const donateAmount = getInputFieldValueById('input-donate-f');


//   const iBalance = getTextFieldValueById('i-balance');
//   const newIBalance = iBalance - donateAmount;
//   document.getElementById('i-balance').innerHTML = newIBalance;
// }); 

document.getElementById('btn-donate-money-f')
.addEventListener('click', function (event){
  event.preventDefault();

const donateAmount = getInputFieldValueById('input-donate-f');
const balance = getTextFieldValueById('account-balance-f');
if (isNaN(donateAmount) || donateAmount ==='' || donateAmount > balance){   
 return false;
}else{
  const donateAmount = getInputFieldValueById('input-donate-f');

    const iBalance = getTextFieldValueById('i-balance');
    const newIBalance = iBalance - donateAmount;
    document.getElementById('i-balance').innerHTML = newIBalance;
const p = document.createElement('p');
    const time = new Date();
    p.innerText = `${donateAmount} taka is donated for quota movement victims in Bangladesh.
    ${time}`
    document.getElementById('history-container').appendChild(p);
    p.style.border = "1px solid black";
    p.style.padding = "4px 8px";
  }
 }) 
