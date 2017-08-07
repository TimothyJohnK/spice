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

    function imageBuilder() {
        let currentImagePath = currentImage.imagePath,
            imageDescription = currentImage.description;
        imagesSrc.innerHTML = currentImagePath;
        return imagesSrc.innerHTML
    };
    // called here to load the first image
    imageBuilder();

    // Adds text description to image
    currentImageText = document.getElementsByClassName('image_text')[counter];
    currentImageText.innerHTML = currentImage.description;

    // leftButton.addEventListener('click', () => (imageBuilder(), () => counter--));
    // rightButton.addEventListener('click', () => (imageBuilder(), () => counter++));

    leftButton.addEventListener('click', imageBuilder());
    leftButton.addEventListener('click', () => counter--);
    leftButton.addEventListener('click', console.log(counter))

    rightButton.addEventListener('click', imageBuilder());
    rightButton.addEventListener('click', () => counter++);
    rightButton.addEventListener('click', console.log(counter));

    if (counter <= 1) {
        counter = 1
    } else if (counter >= images.length()) {
        counter = images.length()
    };
});