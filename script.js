document.getElementById('changeStylesBtn').addEventListener('click', function() {
    var element = document.getElementById('myElement');
    
    // Change multiple CSS styles
    element.style.display = 'block';
    element.style.width = '75%';
    element.style.backgroundColor = 'blue';
    element.style.border = '2px solid black';
    element.style.fontSize = '5em';
    element.style.color = 'white';
    element.style.margin = '20px';
    element.style.paddingLeft = '10px';
    element.style.paddingBottom = '10px';
    });