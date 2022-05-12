function handleLogin() 
{
   let loginDrop = document.getElementById('loginDropdonw');
   loginDrop.classList.toggle("show");
}

function handleSignup()
{
    let descricaoArea = document.querySelector('.description-area');
    descricaoArea.classList.add('hide');

    let signupAreaExist = document.querySelector('.banner-right .login-area');

    if(!signupAreaExist)
    {
    let signupArea = document.querySelector('.model .login-area').cloneNode(true);
    document.querySelector('.banner-right').append(signupArea);
    }
}

function handleSignupCancel()
{
    let descricaoArea = document.querySelector('.description-area');
    descricaoArea.classList.toggle('hide');
    let signupAreaExist = document.querySelector('.banner-right .login-area');
    //signupAreaExist.classList.add('hide');
    signupAreaExist.remove();

}