<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css" class="css">
</head>
<body>
    <div class="menu">
        <?php require("menu.php"); ?>
    </div>
    <a href="index.php">index.php</a>
    <a href="index2.php">index2.php</a>
    <p>Jesteś w index3</p>
    <?php
        if (isset($_SESSION["logged"]) && $_SESSION["logged"] == 1) {
            echo($_SERVER["PHP_SELF"]);
        }
    ?>
</body>
</html>