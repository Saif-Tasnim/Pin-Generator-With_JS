function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    return pin;
}

function getPin() {
    const pin = generatePin();
    const pin_str = pin + "";
    if (pin_str.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
   const pin = getPin();
   const pin_f = document.getElementById('show-pin');
   pin_f.value = pin;

})

document.getElementById('number-plate').addEventListener('click',function(event){
   const myTypeNumber = event.target.innerText;
   const myPinField = document.getElementById('my-pin');
   const myPrevPin = myPinField.value;
  

   if(isNaN(myTypeNumber)){
     if(myTypeNumber === 'C'){
        myPinField.value = "";
     }

     else{
        const prevPinList = myPrevPin.split('');
        prevPinList.pop();
        const newPin = prevPinList.join('');
        myPinField.value = newPin;

     }
   } 

   else{
    const myNewPin = myPrevPin + myTypeNumber;
    myPinField.value = myNewPin;
   }
})