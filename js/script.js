window.addEventListener('load', function() {
    const leftButton = document.getElementsByClassName('left_button')[0],
        rightButton = document.getElementsByClassName('right_button')[0],
        images = [{
            "index": 1,
            "imagePath": "../images/carousel/aji_panca_chiles.jpg",
            "description": "Aji Panca Chiles"
        }, {
            "index": 2,
            "imagePath": "../images/carousel/amchur.jpg",
            "description": "Amchur/Dried mango powder"
        }, {
            "index": 3,
            "imagePath": "../images/carousel/anise.jpg",
            "description": "Anise"
        }, {
            "index": 4,
            "imagePath": "../images/carousel/cardamom.jpg",
            "description": "Cardamom"
        }];

    let counter = 0,
        imagesSrc = document.getElementsByClassName('images')[0].src,
        currentImage = images[counter];

    function imageBuilder() {
        let currentImagePath = currentImage.imagePath,
            imageDescription = currentImage.description;
        () => imagesSrc.innerHTML(currentImagePath);

    };
    imageBuilder();

    // Adds text description to image
    currentImageText = document.getElementsByClassName('image_text')[0];
    currentImageText.innerHTML = images.description;

    // leftButton.addEventListener('click', () => (imageBuilder(), () => counter--));
    // rightButton.addEventListener('click', () => (imageBuilder(), () => counter++));

    leftButton.addEventListener('click', imageBuilder());
    leftButton.addEventListener('click', counter--);

    rightButton.addEventListener('click', imageBuilder());
    rightButton.addEventListener('click', counter++)

    if (counter <= 1) {
        counter = 1
    } else if (counter >= images.length()) {
        counter = images.length()
    };
});