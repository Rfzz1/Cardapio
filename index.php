<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="shortcut icon" href="img/chapeu.ico" type="image/x-icon">
    
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/index.css">
    
    <title>Cardápio TI-MASTERDEV</title>
</head>
<body>
    <section class="container">
        <?php include_once 'header.php'; ?>

        <section class="slider">
            <section class="slide active">
                <section class="slideContent">
                    <h2>PURÊ DE</h2>
                    <h2>MANDIOQUINHA AO MOLHO PESTO</h2>
                </section>
            </section>

            <section class="slide">
                <section class="slideContent">
                    <h2>FILÉ MIGNON</h2>
                    <h2>NA MANTEIGA DE ERVAS E BATATAS RÚSTICAS COM AIÓLI</h2>
                </section>
            </section>

            <section class="slide">
                <section class="slideContent">
                    <h2>BROWNIE</h2>
                    <h2>DE CHOCOLATE</h2>
                </section>
            </section>
        </section>
    </section>

        <section class="navigation">
            <ul class="bullets">
            </ul>
            <section class="navButtons">
                <button class="botaoseta prevButton"></button>
                <button class="botaoseta nextButton"></button>
            </section>
        </section>
    </section>



    <script src="js/pratos.js"></script>
</body>
</html>
