<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "adeezon9@gmail.com";
    $subject = "RSVP Form Submission";
    $message = "Number of adults: " . $_POST["adults"] . "\n" .
               "Number of youths: " . $_POST["youths"] . "\n" .
               "Number of children under 12: " . $_POST["children"];
    $headers = "From: no-reply@example.com";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: Thank_you.html");
        exit();
    } else {
        echo "Error sending email.";
    }
}
?>
