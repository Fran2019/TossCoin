        var button = document.getElementById("btn");
        var imagen = document.getElementById("image");
        var txt = document.getElementById("txtResult");
        var numeroRandom;

        let oscilation = (max, min) => {
            return Math.round(Math.random() * (max - min) + min);
        };

        button.addEventListener("click", () => {
            txt.innerHTML = "COIN IN THE AIR..."
            setTimeout(function () {
                var coin = oscilation(1, 0);
                if (coin == 1) {
                    imagen.src = "img/coin_side_1.svg";
                    txt.innerHTML = "HEADS";
                } else {
                    imagen.src = "img/coin_side_2.svg";
                    txt.innerHTML = "TAILS";
                }
            }, 1000);
        });