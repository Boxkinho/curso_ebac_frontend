const form = document.getElementById('form-numeros');

form.addEventListener('submit', function(e) {

    const numeroA = document.getElementById('numero-a').value;
    const numeroB = document.getElementById('numero-b').value;
    
    if (numeroB > numeroA) {
        alert('O número B é maior que o número A. formulário foi enviado');

    } else {
        alert ('O número B deve ser maior. Formuério inválido.');
    }
})