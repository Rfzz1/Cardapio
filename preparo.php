<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="img/chapeu.ico" type="image/x-icon">
    
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/preparo.css">

    <title>Modo de Preparo</title>
</head>
<body>
<?php include_once 'header.php';?>

<section class="fundo"></section>

<section class="containerPreparo">
    <section class="slider">

        <section class="slide active">

            <section class="slideContent">
                <h1 class="titulo"></h1>
                <p class="descricao"></p>

                <h3>Ingredientes</h3>
                <ul class="ingredientes"></ul>

                <h3>Modo de preparo</h3>
                <p class="preparo"></p>
            </section>
        </section>

    </section>

    <section class="navigation">
        <ul class="bullets"></ul>
        <section class="navButtons">
            <button class="botaoseta prevButton"></button>
            <button class="botaoseta nextButton"></button>
        </section>
    </section>

</section>

<script src="js/preparo.js"></script>
</body>
</html>
