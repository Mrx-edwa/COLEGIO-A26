function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulación de verificación del usuario
    const validUsername = 'edwar2005';
    const validPassword = 'edwar';

    if (username === validUsername && password === validPassword) {
        alert('ADMINISTRADOR 005 INICIASTE SECION' + validUsername +'!');
        window.location.href='./admin.html';
        // Aquí redirigirías a la página principal o dashboard
        // window.location.href = 'dashboard.html';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'ADMIN O USUARIO NO SE ENCUENTRA EN LA BASE DE DATOS';
    }

    return false; // Para evitar el envío real del formulario
}
