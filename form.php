<?php

if(isset($_POST['email'])) {
  //Email information
  $admin_email = "info@oriplex.com";
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['tel'];
  $message = $_POST['message'];
  
  $body = "";
  
  $body .= "From: ".$name. "\r\n";
  $body .= "Email: ".$email. "\r\n";
  $body .= "Phone: ".$phone. "\r\n";
  $body .= "\r\n";
  $body .= "Message: \r\n".$message. "\r\n";
  
  $headers = "From: Oriplex ".$email;

  //send email

  mail($admin_email, "New Form Submission", $body, $headers);
  header('Location: https://oriplex.com/confirm-submission');
}