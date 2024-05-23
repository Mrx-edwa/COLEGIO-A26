<?php
if (empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(400); // Bad Request
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = "edwarxr3@gmail.com"; // Cambia este correo al tuyo //
$subject = "$m_subject: $name";
$body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email\n\nSubject: $m_subject\n\nMessage:\n$message";
$header = "From: noreply@yourdomain.com\n"; // Es mejor usar un correo fijo para evitar problemas de SPF
$header .= "Reply-To: $email";

if (!mail($to, $subject, $body, $header)) {
  http_response_code(500); // Internal Server Error
  exit();
} else {
  http_response_code(200); // OK
}
?>
