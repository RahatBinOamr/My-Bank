document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
     const passwordField = document.getElementById('user-password');
     const password = passwordField.value;
    if(email ==" hello@bro.com"  || password == "sakib"){
        window.location.href = 'bank.html';
    }
    else{
        alert('please try Again');
    }
})