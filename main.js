// VARIABLES
const cardname = document.getElementById('input-name');
const cardnumber = document.getElementById('input-number');
const cardcvc = document.getElementById('input-cvc');
const cardmonth = document.getElementById('input-month');
const cardyear = document.getElementById('input-year');
const buttonconfirm = document.getElementById('button-confirm');
const formvalidate = document.getElementById('form-validation');
const formdata = document.getElementById('form-data');
let validatename = false;
let validatenumber = false;
let validatecvc = false;
let validatemonth = false;
let validateyear = false;

window.document.addEventListener('keyup', () => {
    document.getElementById('card-name').value = cardname.value;
    document.getElementById('card-number').value = cardnumber.value;
    document.getElementById('card-digits').value = cardcvc.value;
    document.getElementById('card-expired-month').value = cardmonth.value;
    document.getElementById('card-expired-year').value = cardyear.value;
})

buttonconfirm.addEventListener('click', (e) => {
    e.preventDefault()
    nameValidation();
    numberValidation();
    cvcValidation();
    monthValidation();
    yearValidation();
    if(validatename === true && validatenumber === true && validatecvc === true && validatemonth === true && validateyear === true){
        formvalidate.style.display = 'flex';
        formdata.style.display = 'none';
    };
});

const nameValidation = () => {
    const blankname = document.getElementById('error-blank-name');
    const formatname = document.getElementById('error-format-name');
    if (cardname.value === '') {
        blankname.style.display = 'block';
        formatname.style.display = 'none';
        cardname.style.borderColor = 'hsl(0, 100%, 66%)';
        cardname.style.borderWidth = '1px';
    }
    else if (!/^[a-zA-Z]*$/g.test(cardname.value)) {
        formatname.style.display = 'block';
        blankname.style.display = 'none';
        cardname.style.borderColor = 'hsl(0, 100%, 66%)';
        cardname.style.borderWidth = '1px';
    } else {
        formatname.style.display = 'none';
        blankname.style.display = 'none';
        cardname.style.borderColor = 'rgb(223, 223, 223)';
        validatename = true;
    };
}

const numberValidation = () => {
    const blanknumber = document.getElementById('error-blank-number');
    const formatnumber = document.getElementById('error-format-number');
    if (cardnumber.value === '') {
        blanknumber.style.display = 'block';
        formatnumber.style.display = 'none';
        cardnumber.style.borderColor = 'hsl(0, 100%, 66%)';
        cardnumber.style.borderWidth = '1px';
    } else if (!/^[0-9]*$/g.test(cardnumber.value)) {
        formatnumber.style.display = 'block';
        blanknumber.style.display = 'none';
        cardnumber.style.borderColor = 'hsl(0, 100%, 66%)';
        cardnumber.style.borderWidth = '1px';
    } else {
        formatnumber.style.display = 'none';
        blanknumber.style.display = 'none';
        cardnumber.style.borderColor = 'rgb(223, 223, 223)';
        validatenumber = true;
    };
}

const cvcValidation = () => {
    const blankcvc = document.getElementById('error-blank-cvc');
    const formatcvc = document.getElementById('error-format-cvc');
    if (cardcvc.value === '') {
        blankcvc.style.display = 'block';
        formatcvc.style.display = 'none';
        cardcvc.style.borderColor = 'hsl(0, 100%, 66%)';
        cardcvc.style.borderWidth = '1px';
    } else if (!/^[0-9]*$/g.test(cardcvc.value)) {
        formatcvc.style.display = 'block';
        blankcvc.style.display = 'none';
        cardcvc.style.borderColor = 'hsl(0, 100%, 66%)';
        cardcvc.style.borderWidth = '1px';
    } else {
        formatcvc.style.display = 'none';
        blankcvc.style.display = 'none';
        cardcvc.style.borderColor = 'rgb(223, 223, 223)';
        validatecvc = true;
    };
}

const monthValidation = () => {
    const blankmonth = document.getElementById('error-blank-month');
    const formatmonth = document.getElementById('error-format-month');
    if (cardmonth.value === '') {
        blankmonth.style.display = 'block';
        formatmonth.style.display = 'none';
        cardmonth.style.borderColor = 'hsl(0, 100%, 66%)';
        cardmonth.style.borderWidth = '1px';
    } else if (!/^[0-9]*$/g.test(cardmonth.value)) {
        formatmonth.style.display = 'block';
        blankmonth.style.display = 'none';
        cardmonth.style.borderColor = 'hsl(0, 100%, 66%)';
        cardmonth.style.borderWidth = '1px';
    } else if (cardmonth.value > 12) {
        formatmonth.style.display = 'block';
        blankmonth.style.display = 'none';
        cardmonth.style.borderColor = 'hsl(0, 100%, 66%)';
        cardmonth.style.borderWidth = '1px';
    } else {
        formatmonth.style.display = 'none';
        blankmonth.style.display = 'none';
        cardmonth.style.borderColor = 'rgb(223, 223, 223)';
        validatemonth = true;
    }

}

const yearValidation = () => {
    const blankmonth = document.getElementById('error-blank-year');
    const formatmonth = document.getElementById('error-format-year');
    const date = new Date();
    const year = date.getFullYear();
    if (cardyear.value === '') {
        blankmonth.style.display = 'block';
        formatmonth.style.display = 'none';
        cardyear.style.borderColor = 'hsl(0, 100%, 66%)';
        cardyear.style.borderWidth = '1px';
    }
    else if (!/^[0-9]*$/g.test(cardyear.value)) {
        formatmonth.style.display = 'block';
        blankmonth.style.display = 'none';
        cardyear.style.borderColor = 'hsl(0, 100%, 66%)';
        cardyear.style.borderWidth = '1px';
    } else if (cardyear.value <= year) {
        formatmonth.style.display = 'block';
        blankmonth.style.display = 'none';
        cardyear.style.borderColor = 'hsl(0, 100%, 66%)';
        cardyear.style.borderWidth = '1px';
    } else {
        document.getElementById('error-format-year').style.display = 'none';
        blankmonth.style.display = 'none';
        cardyear.style.borderColor = 'rgb(223, 223, 223)';
        validateyear = true;
    };
}

