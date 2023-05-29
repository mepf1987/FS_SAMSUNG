function loadVideo(file) {
    var videoPlayer = document.getElementById('videoPlayer');
    var loadingMessage = document.getElementById('loadingMessage');
  
    // Mostrar el mensaje de carga
    loadingMessage.style.display = 'block';
  
    // Verificar la extensión del video
    if (file.type === 'video/mp4') {
      var fileReader = new FileReader();
      fileReader.onload = function() {
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

  function manualLoad(event) {
    event.preventDefault();
    var fileInput = event.target;
    var file = fileInput.files[0];
    loadVideo(file);
  }

  function handleDrop(event) {
    event.preventDefault();
    var file = event.dataTransfer.files[0];
    loadVideo(file);
  }
  
  function handleDragOver(event) {
    event.preventDefault();
  }