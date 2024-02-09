function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "2615") {
        document.getElementById("title").innerHTML = "ACCESO CONCEDIDO";
        document.getElementById("password").style.display = "none";
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerHTML = "Descargando archivos...";
        var button = document.getElementById("accessButton");
        if (button) {
            button.style.display = "none"; // Ocultar el botón de acceso
        }
        downloadFiles();
    } else {
        document.getElementById("message").innerHTML = "Código incorrecto. Inténtalo de nuevo.";
        document.getElementById("message").style.display = "block"; // Mostrar el mensaje de error
    }
}

function downloadFiles() {
    var counter = 0;
    var totalFiles = 1435; // Cantidad total de archivos a descargar

    var downloadInterval = setInterval(function() {
        counter++;
        if (counter <= totalFiles) {
            document.getElementById("message").innerHTML = "Descargando archivos... " + counter + "/" + totalFiles;
        } else {
            clearInterval(downloadInterval);
        }
    }, 50); // Intervalo de tiempo entre cada archivo descargado (en milisegundos)
}

function createFallingText() {
    var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var fallingText = document.createElement("span");
    fallingText.className = "falling-text";
    fallingText.innerText = characters.charAt(Math.floor(Math.random() * characters.length));
    fallingText.style.left = Math.random() * window.innerWidth + "px";
    fallingText.style.top = Math.random() * window.innerHeight + "px";
    fallingText.style.animationDuration = Math.random() * 5 + 2 + "s";
    fallingText.style.opacity = Math.random();
    document.body.appendChild(fallingText);
    setTimeout(function() {
        fallingText.remove();
    }, 5000);
}

setInterval(createFallingText, 100);
