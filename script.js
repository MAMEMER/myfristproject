

function validate(){
    let username = document.getElementById('username').
    value;
    let password = document.getElementById('password').
    value;

    if(username == 'admin' && password== '123456'){
        alert('Login success');
    }else{
        alert('username or password is invalid')
    }

}

