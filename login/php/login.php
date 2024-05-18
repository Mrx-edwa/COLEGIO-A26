<?php
session_start();
require_once 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Consulta para verificar el usuario
    $sql = "SELECT id, username, password, user_type FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        if (password_verify($password, $row['password'])) {
            $_SESSION['username'] = $row['username'];
            $_SESSION['user_type'] = $row['user_type'];
            header("Location: ../dashboard.php");
            exit();
        } else {
            echo "TE CONECTASTE PIBE,";
        }
    } else {
        echo "ESTE USUARIO NO SE ENCUENTRA EN LA BASE DE DATOS.";
    }

    $stmt->close();
    $conn->close();
}
?>
