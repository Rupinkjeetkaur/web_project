const form = document.getElementById('form');
const name = document.getElementById('name');
const cname = document.getElementById('cname');
const email = document.getElementById('email');

const cnumber = document.getElementById('cnumber');
const address = document.getElementById('address');
const agree = document.getElementById('agree');




form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = name.value.trim();
    const cnameValue = cname.value.trim();
    const emailValue = email.value.trim();
    
    const cnumberValue = cnumber.value.trim();
    const addressValue = address.value.trim();
     const agreeValue = agree.value.trim();
   

    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be blank');
    } else {
        setSuccessFor(name);
    }

    if (cnameValue === '') {
        setErrorFor(cname, 'Compny name cannot be blank');
    } else {
        setSuccessFor(cname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

   

     if (cnumberValue === '') {
        setErrorFor(cnumber, 'Number cannot be blank');
    } else {
        setSuccessFor(cnumber);
    }

    if (addressValue === '') {
        setErrorFor(address, 'Message cannot be blank');
    } else {
        setSuccessFor(address);
    }

    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




function validateForm(form)
{
    console.log("checkbox checked is ", form.agree.checked);
    if(!form.agree.checked)
    {
        document.getElementById('agree_chk_error').style.visibility='visible';
        return false;
    }
    else
    {
        document.getElementById('agree_chk_error').style.visibility='hidden';
        window.location.replace("./index.html");
        return true;
    }
}




