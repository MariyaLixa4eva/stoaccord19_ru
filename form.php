<?php

$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$tel = htmlspecialchars($_POST["tel"]);
$message = htmlspecialchars($_POST["message"]);

$address = "m.lihacheva@stoaccord19.ru";
$sub = "Сообщение с сайта СТО Аккорд19";


$mes = "Сообщение с сайта СТО Аккорд19.\n
Имя отправителя: $name 
Электронный адрес отправителя: $email
Телефон отправителя: $tel
Текст сообщения:
$message";

if ($_POST['check'] != 'secretcode') exit('Spam decected');
if (! empty($_POST)) 
{

$from  = "Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
	header('Refresh: 5; URL=http://stoaccord19.ru/');
	echo '
    
    Письмо отправлено, через 5 секунд вы вернетесь на страницу Мария Лихачева - Front-End Разработчик';}
else {
	header('Refresh: 5; URL=http://stoaccord19.ru/');
	echo '
    
    Письмо не отправлено, через 5 секунд вы вернетесь на страницу Мария Лихачева - Front-End Разработчик';}
}
exit;
?>