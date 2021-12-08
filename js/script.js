const decimal = document.querySelector('#decimal');
const bin = document.querySelector('#bin');

const bin2DecBtn = document.querySelector('#bin2dec-btn');
const dec2BinBtn = document.querySelector('#dec2bin-btn');


const decValue = document.querySelector('#decimal-number');

const binValue = document.querySelector('#binary-number');


const convertBinToDec = () => {
    let binDigit = bin.value;
    let binArr = Array.from(binDigit);

    binArr.forEach((val)=>{
        if(val > 1) {
            alert('Enter Combinations of zeros(0)s and one(1)')
        }
        else {
            decValue.innerHTML = parseInt(binDigit,2);
        }
    })


    bin.value = '';

}

const convertDecToBin = () => {
    let decDigit = parseInt(decimal.value);
    binValue.innerHTML = decDigit.toString(2);
    
    decimal.value = '';

}





bin2DecBtn.addEventListener('click', convertBinToDec)
dec2BinBtn.addEventListener('click', convertDecToBin )