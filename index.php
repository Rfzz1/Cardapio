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
                    <h2>CARDÁPIO 1</h2>
                </section>
            </section>

            <section class="slide">
                <section class="slideContent">
                    <h2>CARDÁPIO 2</h2>
                </section>
            </section>

            <section class="slide">
                <section class="slideContent">
                    <h2>CARDÁPIO 3</h2>
                </section>
            </section>
        </section>
    </section>

        <section class="navigation">
            <ul class="bullets">
            </ul>
            <section class="navButtons">
                <button class="botaoseta prevButton"><img src="img/arrowL.png" alt="Seta Esquerda"></button>
                <button class="botaoseta nextButton"><img src="img/arrowR.png" alt="Seta Direita"></button>
            </section>
        </section>
    </section>



    <script src="js/pratos.js"></script>
</body>
</html>
