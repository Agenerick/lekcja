<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="Stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="container">
        <div class="header">header</div>
        <div class="sidebar">sidebar</div>
        <!-- <div class="item1 card">
            <div class="product">
                <img src="http://www.idealhomeshowshop.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/d/adjustable-mesh-office-swivel-chair.jpg"
                class="product-img" alt="office chair">
                <div class="product-info">
                    <p class="product-price">Cena: <span class="product-price-value">130zł</span><br>
                    <span class="product-sale">Promocja</span></p>
                    <div class="product-variants">Kolor:
                        <ul>
                            <li>Czarny</li>
                            <li>Szary</li>
                            <li>Beżowy</li>
                        </ul>
                    </div>
                </div>
                <div class="product-desc">
                    <h3>Krzesło Biurowe</h3>
                    <p>Obrotowe i gładko jeździ</p>
                    <a href="#">Więcej</a>
                    <a href="#">Kup Teraz</a>
                </div>
            </div>
        </div> -->
        <?php
            for ($i = 0; $i < 12; $i++) {
                echo('<div class="item card">
                    <div class="product">
                        <img src="http://www.idealhomeshowshop.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/d/adjustable-mesh-office-swivel-chair.jpg"
                        class="product-img" alt="office chair">
                        <div class="product-info">
                            <p class="product-price">Cena: <span class="product-price-value">130zł</span><br>
                            <span class="product-sale">Promocja</span></p>
                            <div class="product-variants">Kolor:
                                <ul>
                                    <li>Czarny</li>
                                    <li>Szary</li>
                                    <li>Beżowy</li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-desc">
                            <h3>Krzesło Biurowe</h3>
                            <p>Obrotowe i gładko jeździ</p>
                            <a href="#">Więcej</a>
                            <a href="#">Kup Teraz</a>
                        </div>
                    </div>
                </div>');
            }
        ?>
        <!-- <div class="item2 card">2</div>
        <div class="item3 card">3</div>
        <div class="item4 card">4</div>
        <div class="item5 card">5</div>
        <div class="item6 card">6</div>
        <div class="item7 card">7</div>
        <div class="item8 card">8</div>
        <div class="item9 card">9</div>
        <div class="item10 card">10</div>
        <div class="item11 card">11</div>
        <div class="item12 card">12</div> -->
        <div class="footer">footer</div>
    </div>
</body>
</html>