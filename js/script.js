window.addEventListener('load', function() {
    const leftButton = document.getElementsByClassName('left_button')[0],
        rightButton = document.getElementsByClassName('right_button')[0],
        images = [{
            "imagePath": "../images/carousel/aji_panca_chiles.jpg",
            "description": "Aji Panca Chiles"
        }, {
            "imagePath": "../images/carousel/amchur.jpg",
            "description": "Amchur/Dried mango powder"
        }, {
            "imagePath": "../images/carousel/anise.jpg",
            "description": "Anise"
        }, {
            "imagePath": "../images/carousel/cardamom.jpg",
            "description": "Cardamom"
        }];

    let counter = 0,
        imagesSrc = document.getElementsByClassName('images')[0].src,
        currentImage = images[counter];

    // Adds text description to image
    currentImageText = document.getElementsByClassName('image_text')[counter];
    currentImageText.innerHTML = currentImage.description;

    function imageBuilder(change) {
        // First call will increment to 0.
        counter = counter || -1;
        // If change isn’t passed, increment;
        change = change || 1;
        counter += change;
        counter = counter < 0 ? images.length : counter;
        counter = counter > (images.length - 1) ? 0 : counter;
        imagesSrc.src = images[counter].imagePath;
    };

    leftButton.addEventListener('click', () => {
        imageBuilder(-1);
        counter--;
    });

    rightButton.addEventListener('click', () => {
        imageBuilder(1);
        counter++;
        () => { console.log(counter) }
    });
});