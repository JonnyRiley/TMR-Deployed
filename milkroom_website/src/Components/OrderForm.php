<?php
if (isset($_POST['name']) && isset($_POST['email'])) {
  $name = $_POST['name'];
  $telephone = $_POST['telephone'];
  $boxSetAmount = $_POST[''];
  $brownie = $_POST['brownie'];
    $terrysChocBrownie = $_POST['terrysChocBrownie'];,
    $brownieKinderBuenoBrownie = $_POST['brownieKinderBuenoBrownie'];
    $fudgeBrownie = $_POST['fudgeBrownie'];
    $crispyMMBrownie = $_POST['crispyMMBrownie'];
    $lotusBiscoffBrownie = $_POST['lotusBiscoffBrownie'];
    $lotusBiscoffSlice = $_POST['lotusBiscoffSlice'];
    $oreoDonut = $_POST['oreoDonut'];
    $milkCookie = $_POST['milkCookie'];
    $doubleChocCookie = $_POST['doubleChocCookie'];
    $whiteCookie = $_POST['whiteCookie'];
    $lotusDonut = $_POST['lotusDonut'];
    $email = $_POST['email'];
      $enquiry = $_POST['enquiry'];
$delivery = $_POST['Delivery'];
$to = "hello@themilkroom.com";
$subject = "Customer Enquiry";
$body = '<html>
<body> 
<h2>Contact Us- hello@themilkroom.com</h2>
<br>
<p>Name<br'.$name.'</p>
<p>Email<br'.$email.'</p>
</body>
</html>';
$headers = "From: ".$name.">\r\n";
$headers = "Reply-To: ".$email.">\r\n";
$headers = "MIME-Version: 1.0 >\r\n";
$headers = "Content-type: text/html; charset-utf8";

$send = mail($to, $subject, $body, $headers);
if($send) {
  echo '<br>';
  echo ' Thanks for contacting themilkroom we will be in touch as soon as possible.';
} else {
  echo 'error';
}
}
?>