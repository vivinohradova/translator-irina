<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ua', 'phpmailer/language/');
$mail->IsHTML(true);

//Від кого письмо
$mail->setFrom('info@fls.guru', "Сайт-перекладача");
//Кому відправити
$mail->addAddress('cleotory@hotmail.com');
//Тема письма
$mail->Subject = 'Привіт! Ви маєте запит до переводів';

//Тіло письма
$body = '<h1>Зустрічай супер письмо!</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Ім\'я:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['phoneNumber']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['phoneNumber'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if(!empty($_POST['text'])){
    $body.='<p><strong>Запит:</strong> '.$_POST['text'].'</p>';
}

//Відправляємо
if (!$mail->send()) {
    $messege = 'Помилка';
} else {
    $messege = 'Данні відправлені!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>