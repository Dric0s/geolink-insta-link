document.addEventListener("DOMContentLoaded", function() {
    const pedidoButton = document.getElementById("pedidoButton");
    const enviarZap1 = document.getElementById("enviarZap1");
    const enviarZap2 = document.getElementById("enviarZap2");
    const voltarButton = document.getElementById("voltarButton");
    const mainContent = document.getElementById("mainContent");
    const zapContent = document.getElementById("zapContent");
    const instagramButton = document.getElementById("instagramButton");

    pedidoButton.addEventListener("click", function() {
        mainContent.style.display = "none";
        zapContent.style.display = "flex";
    });

    instagramButton.addEventListener('click', function(){
        window.open("https://www.instagram.com/geo.lly", "_blank")
    })

    if (enviarZap1 && enviarZap2 && voltarButton) {
        enviarZap1.addEventListener("click", function() {
            window.open("https://api.whatsapp.com/send?phone=556292296340&text=Oii%20Geovana%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20joias%21", "_blank");
        });

        enviarZap2.addEventListener("click", function() {
            window.open("https://api.whatsapp.com/send?phone=556294234603&text=Oii%20Mikaelly%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20joias%21", "_blank");
        });

        voltarButton.addEventListener("click", function() {
            mainContent.style.display = "flex";
            zapContent.style.display = "none";
        });
    }
});