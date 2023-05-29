function cargarVideo(event) {
    var videoPlayer = document.getElementById('videoPlayer');
    var loadingMessage = document.getElementById('loadingMessage');
    var fileInput = document.getElementById('fileInput');
    var file = event.target.files[0];

    // Mostrar el mensaje de carga
    loadingMessage.style.display = 'block';

    // Verificar la extensión del video
    if (file.type === 'video/mp4') {
        var fileReader = new FileReader();
        fileReader.onload = function () {
            // Ocultar el mensaje de carga después de que el video se haya cargado
            loadingMessage.style.display = 'none';
            videoPlayer.src = fileReader.result;
            videoPlayer.play();
        };
        fileReader.readAsDataURL(file);
    } else {
        console.error('Error: El video debe tener formato MP4.');
        // Ocultar el mensaje de carga en caso de error
        loadingMessage.style.display = 'none';
    }
}

document.getElementById('fileInput').addEventListener('change', cargarVideo);