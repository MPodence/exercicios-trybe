function prevent (event) {
    event.preventDefault();
}

function clearForm (event) {
    event.preventDefault();
    document.getElementById('myForm').reset();
}

document.getElementById('enviar').addEventListener('click', prevent);
document.getElementById('apagar').addEventListener('click', clearForm);