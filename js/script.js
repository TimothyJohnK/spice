window.addEventListener('load', function() {
    const leftButton = document.getElementsByClassName('left_button')[0],
        rightButton = document.getElementsByClassName('right_button')[0],
        imagesSrc = document.getElementsByClassName('images')[0].src,
        imageRepo = [{
            'index': 1,
            'imagePath': '../images/carousel/aji_panca_chiles.jpg',
            'description': 'Aji Panca Chiles'
        }, {
            'index': 2,
            'imagePath': '../images/carousel/amchur.jpg',
            'description': 'Amchur/Dried mango powder'
        }, {
            'index': 3,
            'imagePath': '../images/carousel/anise.jpg',
            'description': 'Anise'
        }, {
            'index': 4,
            'imagePath': '../images/carousel/cardamom.jpg',
            'description': 'Cardamom'
        }];

    let images = JSON.parse(imageRepo),
        counter = 1;

    const imageBuilder = function imageBuilder(images[counter]) {
        let imagePath = this.imagePath,
            imageDescription = this.description;
        imagesSrc = this.imagePath;

    };

    // Adds text description to image
    currentImageText = document.getElementsByClassName[0];
    currentImageText.innerHTML = images.description;

    leftButton.addEventListener('click', () => (imageBuilder(), counter--));
    rightButton.addEventListener('click', () => (imageBuilder(), counter++));

    if (counter <= 1) {
        counter = 1
    } else if (counter >= imageRepo.length()) {
        counter = imageRepo.length()
    };
});