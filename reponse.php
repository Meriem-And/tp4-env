<?php

require ('connex.php');

foreach ($_POST as $key => $value) {
    $$key = mysqli_real_escape_string($con, $value);
}

$password_hash = password_hash($userInfoPass, PASSWORD_BCRYPT);


$doublonQuery= "SELECT * FROM userInfo where userInfoName='$userInfoName'";
$doublon=mysqli_query($con, $doublonQuery);
if(mysqli_num_rows($doublon)>0){
    echo("ce nom d utilisateur existe deja!");
}
else{
    $sql = "INSERT INTO userInfo (userInfoName,userInfoPass) VALUES ('$userInfoName','$password_hash')";
    mysqli_query($con, $sql);
    echo " Bienvenu <br> Votre mot de passe est  ".$userInfoPass,'<br> Mot de pass chiffrée '.$password_hash;

}

echo("<BR>");


?>
