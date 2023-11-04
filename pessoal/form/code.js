var email = document.getElementById('iemail').value;
var senha = document.getElementById('isenha').value;


function entrar(){
  if (email.value == 'gabriel@gmail.com' && senha.value == 'admin12345') {
    document.alert('Sucesso')
  }
  else{
    document.alert('erro')
  }
  
}