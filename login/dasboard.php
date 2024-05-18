<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: ../index.html");
    exit();
}

$user_type = $_SESSION['user_type'];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>
<body>
    <h1>Bienvenido, <?php echo $_SESSION['username']; ?></h1>
    <p>Tipo de usuario: <?php echo $user_type; ?></p>

    <?php if ($user_type == 'admin'): ?>
        <p>Contenido exclusivo para administradores.</p>
    <?php elseif ($user_type == 'user'): ?>
        <p>Contenido exclusivo para usuarios normales.</p>
    <?php endif; ?>
</body>
</html>
