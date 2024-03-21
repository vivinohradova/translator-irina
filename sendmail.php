<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('uk', 'phpmailer/language/');
$mail->IsHTML(true);

//Від кого письмо
$mail->setFrom('iryna-derhachova.website', "Сайт-перекладача");
//Кому відправити
$mail->addAddress('honyaku.iryna@gmail.com');
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

// Додаємо тіло письма
$mail->Body = $body;

//Відправляємо
if (!$mail->send()) {
    $message = 'Помилка';
} else {
    $message = 'Данні відправлені!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>