// Add event listener to the button
document.querySelector('button').addEventListener('click', function() {
    alert('Вы кликнули кнопку!');
  });
  
  // Add event listener to the file input
  document.querySelector('#fileInput').addEventListener('change', function() {
    const fileName = this.files[0].name;
    document.querySelector('#uploadedFile').textContent = `File uploaded: ${fileName}`;
  });