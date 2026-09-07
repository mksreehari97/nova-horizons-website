<?php
// Check if the form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. Set the company email address where you want to receive the messages
    $toEmail = "info@novahorizons.com"; // <-- Change this to the actual receiving inbox
    
    // 2. Collect and sanitize form data
    $firstName = htmlspecialchars(strip_tags(trim($_POST["firstName"])));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(strip_tags(trim($_POST["phone"])));
    $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

    // 3. Prepare the email subject and body
    $subject = "New Website Inquiry from: $firstName";
    
    $emailBody = "You have received a new message from the Nova Horizons website contact form.\n\n";
    $emailBody .= "===================================\n";
    $emailBody .= "Name: $firstName\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Phone: $phone\n";
    $emailBody .= "===================================\n\n";
    $emailBody .= "Message:\n$message\n";

    // 4. Set email headers
    $headers = "From: website@novahorizons.com\r\n"; // Standard practice to send FROM your domain
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 5. Send the email and redirect the user
    if (mail($toEmail, $subject, $emailBody, $headers)) {
        // Success: Redirect back to contact page with a success flag
        header("Location: contact.html?status=success");
        exit;
    } else {
        // Error: Redirect back to contact page with an error flag
        header("Location: contact.html?status=error");
        exit;
    }
} else {
    // If someone tries to access this file directly, send them away
    header("Location: contact.html");
    exit;
}
?>