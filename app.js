const inputText = document.querySelector('input');

const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validarInput = (e) => {
  const email = e.target.value;
  if (!patron.test(email)) {
    inputText.style.borderColor = "red";
    errorText.style.display = "block";
   
  } else {
     // Restablecer el color del borde
    inputText.style.borderColor = "initial"; 
    errorText.style.display = "none";
  }
};

inputText.addEventListener('change', validarInput);
inputText.addEventListener('focusout', validarInput);
