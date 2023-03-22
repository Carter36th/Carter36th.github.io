let data = [
    {
        photo: "Pictures/mosswater.png",
        tittle: "Mossy swamp",
        description: "The sound of this little waterfalls brings peace to your mind alongside with singing birds in the trees. Except everywhere bitting mosquitos!",
    },
    {
        photo: "Pictures/forrest.png",
        tittle: "Morning Forrest",
        description: "You can feel the moisture and warmth of first sunbeams that early in the morning by just looking at this picture. Does it give you chills?"
    },
    {
        photo: "Pictures/cropfield.png",
        tittle: "Fresh bread",
        description: "Those high cobs of grain slowly moving in the direction of the wind. That wind sounds like its whispering into your ears 'feel it'."
    },
    {
        photo: "Pictures/beach.png",
        tittle: "Get tan",
        description: "Straight from a movie 'Beach' with Leonardo Di Caprio (except those sharks and drug dealers). Be honest, don't you ever dreamt of spending afternoon somewhere like this place?"
    },
    {
        photo: "Pictures/nightsky.png",
        tittle: "Milky way",
        description: "With those long exposure photos you can enjoy a view of our galaxy itself. But hurry, in about 4.5 billion years Milky Way will collide with Andromeda galaxy so do not miss it!"
    },
    {
        photo: "Pictures/shag.png",
        tittle: "Slumdog Millionaire",
        description: "It might not be the comfiest place in the world, but i guarantee you, its the coziest one. No annoying neighbors, noise from nearby mall construction...nothing."
    },
    {
        photo: "Pictures/water.png",
        tittle: "Diving is wonderful",
        description: "Fauna and flora under our oceans speaks for itself. Water covers 72% of planet Earth and we are yet to understand it more. I wonder what else awaits for us in those depths."
    },
    {
        photo: "Pictures/winterlake.png",
        tittle: "Bruce Lee",
        description: "Take skates, clean dust from it, tied up and go on. Whole lake is there just for you to enjoy, so be it. Till summer comes you have all the time of the world"
    },
    ];
    let currentPhoto = 0;
    let loadPhoto = (currentPhoto) => {
    $("#photo").attr("src", data[currentPhoto].photo);
    $("#photo-tittle").text(data[currentPhoto].tittle);
    $("#photo-text").text(data[currentPhoto].description);
    }
    loadPhoto(currentPhoto);

$('#arrimgr').click(() => {
    if(currentPhoto <= data.length) {
    currentPhoto++;
    if(currentPhoto >= data.length) {
        currentPhoto = 0;
    }};
    loadPhoto(currentPhoto);
    });

  $('#arrimgl').click(() => {
    if(currentPhoto >= 0) {
    currentPhoto--;
    if(currentPhoto < 0) {
        currentPhoto = data.length;
    }};
    loadPhoto(currentPhoto);
  });

  data.forEach((nn, index) => {
    $("#thumbnail").append("<div id='thu' class='thumb" + [index] + " '><div class='hidden'>" + data[index].tittle + " </div><img src=" + data[index].photo + " class='photo-thumb1'></img></div>");

    $('.thumb' + [index]).click(() => {
        currentPhoto = [index];
        loadPhoto(currentPhoto);
    })
    if(currentPhoto = [index]) {
        $('.thumb' + [index]).attr("width, 50%");
    }
});
