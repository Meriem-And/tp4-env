<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <title> index</title>
    <script src="script.js" defer> </script>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<form action="reponse.php" name="form" method="post">
    <div>
        <label data-label-utilisateur> Nom utilisateur </label>
        <input data-input-utilisateur type="text" name="userInfoName" maxlength="45"
        value="Mimi"></br>
        <p data-text-error1 class="error hidden "> * Chanps obligatoire</p>
    </div>


    <div>
        <label data-label-mdp> Mot de pass </label>
        <input data-input-mdp type="password" name="userInfoPass" maxlength="15"
        value="1Hunterhunterr@"></br>
        <p data-text-error class="error hidden "> * Chanps obligatoire</p>

          <p data-text-error2 class="error hidden">* Format mot de passe invalide .
              Le mot de passe sera validé que si il a de 8 a 15 caractères,
              au moins une lettre minuscule, au moins une lettre majuscule,
              au moins un chiffre, au moins un de ces caractères spéciaux: $ @ % * + - _ ! ,
              aucun autre caractère possible: pas de & ni de { par exemple.</p>

    </div>



    <button data-js-button type="submit" >Se connécter</button>
</form>
</body>
</html>
