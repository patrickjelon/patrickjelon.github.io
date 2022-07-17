<?php

if(isset($_POST['email'])) {
  //Email information
  $admin_email = "info@polarisdetailing.ca";
  $name = $_POST['fullname'];
  $email = $_POST['e-mail'];
  $phone = $_POST['phone'];
  $company = $_POST['company'];
  $message = $_POST['message'];
  
  $body = "";
  
  $body .= "From: ".$name. "\r\n";
  $body .= "Email: ".$email. "\r\n";
  $body .= "Phone: ".$phone. "\r\n";
  $body .= "Company: ".$company. "\r\n";
  $body .= "\r\n";
  $body .= "Message: \r\n".$message. "\r\n";
  
  $headers = "From: Polaris Website ".$email;

  //send email

  mail($admin_email, "New Form Submission", $body, $headers);
  header('Location: https://polarisdetailing.ca/confirm-submission');
}