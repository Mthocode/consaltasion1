<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "youremail@example.com";
$subject = "New Contact Message - eSoulbuddy";
$headers = "From: $email";

mail($to, $subject, $message, $headers);
header("Location: ../contact.php?success=1");
?>
