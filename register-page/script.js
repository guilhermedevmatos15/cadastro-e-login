const userInput = document.querySelector('input#user');
const emailInput = document.querySelector('input#email');
const passwordInput = document.querySelector('input#password');
const passwordConfirmationInput = document.querySelector('input#password-confirmation');
const button = document.querySelector('button#create-an-account');
const buttonLogin = document.querySelector('button#faça-login');

// OBS: aside é uma div semantica do HTML, então pense assim: 'aside é uma div'.

const validations = {
   user() {
      const asideUser = document.querySelector('aside.inputs');
      const message = document.querySelector('aside.inputs span');
      if (userInput.value.length < 5) {
         asideUser.classList.add('error');
         asideUser.classList.remove('success');
         message.innerHTML='Nome de usuário muito pequeno';
      } else if (userInput.value.length > 20) {
         asideUser.classList.add('error');
         asideUser.classList.remove('success');
         message.innerHTML='Nome de usuário muito grande';
      } else {
         asideUser.classList.remove('error');
         asideUser.classList.add('success');
      }
   },
   email() {
      const asideEmail = document.querySelectorAll('aside.inputs')[1];
      const message = document.querySelectorAll('aside.inputs span')[1];
      if (emailInput.value.includes('@') === true) {
         asideEmail.classList.remove('error');
         asideEmail.classList.add('success');
      } else if (emailInput.value.includes('@') === false) {
         asideEmail.classList.add('error');
         asideEmail.classList.remove('success');
         message.innerHTML='Insira um email válido';
      }
   },
   password() {
      const asidePassword = document.querySelectorAll('aside.inputs')[2];
      const message = document.querySelectorAll('aside.inputs span')[2];
      if (passwordInput.value.length < 8) {
         asidePassword.classList.add('error');
         asidePassword.classList.remove('success');
         message.innerHTML='Senha muito pequena';
      } else if(isNaN(passwordInput.value) == false) {
         asidePassword.classList.add('error');
         asidePassword.classList.remove('success');
         message.innerHTML='Senha não pode conter apenas números';
      } else {
         asidePassword.classList.remove('error');
         asidePassword.classList.add('success');
      }
   },
   passwordConfirmation() {
      const asidePasswordConfirmation = document.querySelectorAll('aside.inputs')[3];
      const message = document.querySelectorAll('aside.inputs span')[3];
      if (passwordConfirmationInput.value !== passwordInput.value) {
         asidePasswordConfirmation.classList.add('error');
         asidePasswordConfirmation.classList.remove('success');
         message.innerHTML='Senhas não estão iguais';
      } else {
         asidePasswordConfirmation.classList.remove('error');
         asidePasswordConfirmation.classList.add('success');
      }
   },
}

userInput.addEventListener('keyup', validations.user);
emailInput.addEventListener('keyup', validations.email);
passwordInput.addEventListener('keyup', validations.password);
passwordInput.addEventListener('keyup', validations.passwordConfirmation);
passwordConfirmationInput.addEventListener('keyup', validations.passwordConfirmation);

button.addEventListener('click', () => {
   // testando novamente se todos inputs estão corretos
   validations.user();
   validations.email();
   validations.password();
   validations.passwordConfirmation();

   const allAsides = [...document.querySelectorAll('aside')];
   const inputsValidateds = allAsides.filter((aside) => {
      if (aside.classList[1] === 'success') {
         return true;
      } else {
         return false;
      }
   });
   if (inputsValidateds.length === 4) {
      const allInputs = document.querySelectorAll('input');
      for (input of allInputs) {
         input.value='';
      }
      for (aside of allAsides) {
         aside.classList.remove('success');
         aside.classList.remove('error');
      }
      const allSpan = document.querySelectorAll('span');
      for (span of allSpan) {
         span.innerHTML='';
      }
      // Acessar página de conta criada!
      // window.location.href = "";
   }
});

buttonLogin.addEventListener('click', () => {
   window.location.assign("http://pt.stackoverflow.com");
   // window.open('login-page/login.html');
});