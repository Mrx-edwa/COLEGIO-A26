function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulación de verificación del usuario
    const validUsername = 'administrador';
    const validPassword = '20052005';

    if (username === validUsername && password === validPassword) {
        alert(' INICIASTE SECION COMO ADMINISTRADOR' +  validUsername + '!');
        window.location.href='./admin.html';
        // Aquí redirigirías a la página principal o dashboard
        // window.location.href = 'dashboard.html';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'ADMIN O USUARIO NO SE ENCUENTRA EN LA BASE DE DATOS';
    }

    return false;
    
    const validUsername = 'usuarios';
    const validPassword = '20052005';

    if (username === validUsername && password === validPassword) {
        alert('INICIASTE SECION COMO USUARIO' + validUsername + '!');
        window.location.href='./usuario.html';
        // Aquí redirigirías a la página principal o dashboard
        // window.location.href = 'dashboard.html';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'ADMIN O USUARIO NO SE ENCUENTRA EN LA BASE DE DATOS';
    }

    return false;// Para evitar el envío real del formulario
}
