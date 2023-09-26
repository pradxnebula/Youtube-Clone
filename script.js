
document.addEventListener("DOMContentLoaded", function () {
    // Array of image and text combinations
    var genreArray = [
        { text: "My Crazy Cooking Experience with Hansal Mehta... Powered By Woodland", image: "image1.webp" },
        { text: "I Visited a Slum in Delhi Right After its Demolition...", image: "image2.webp" },
        { text: "Unfiltered by Samdish ft. Manoj Bajpayee | Powered By Woodland | The Family Man, Satya, Aligarh", image: "image3.webp" },
        { text: "Unfiltered By Samdish ft. Pankaj Tripathi | Full Video", image: "image4.webp" },
        { text: "Unfiltered By Samdish ft. Manoj Pahwa | Actor, Mulk, Dil Dhadakne Do, Anek, Office Office", image: "image5.webp" },
        { text: "Unfiltered By Samdish ft. Anurag Kashyap | Director, Gangs Of Wasseypur, Black Friday, No Smoking", image: "image6.webp" },
        { text: "Unfiltered By Samdish ft. Anurag Basu | Film Director, Barfi, Ludo, Murder | Full Video", image: "image7.webp" },
        { text: "Delhi On Kejriwal Vs Modi ft. Samdish | 2022 Delhi MCD Elections", image: "image8.webp" },
        { text: "Unfiltered With Randeep Hooda Ft. @UNFILTEREDbySamdish | CAT | Netflix India", image: "image9.webp" },
        { text: "Unfiltered With Jitendra Kumar Ft. @UNFILTEREDbySamdish | Jaadugar | Netflix India", image: "image10.webp" },
        { text: "Unfiltered by Samdish ft. Divya Dutta | Powered By Woodland | Veer Zara, Bhaag Milkha Bhaag", image: "image11.webp" },
        { text: "My Crazy Interview With Rahul Gandhi ft. Bharat Jodo Yatra | Samdish Bhatia", image: "image12.jpg" },
        // Add more combinations here
    ];

    // Shuffle the genreArray to randomize the combinations
    shuffleArray(genreArray);

    // Get all elements with the class "genre-img" and "genre-text"
    var imgElements = document.querySelectorAll("#thumbnail");
    var textElements = document.querySelectorAll("#video-title");

    // Function to shuffle an array randomly
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Loop through each card and assign the shuffled combinations
    for (var i = 0; i < imgElements.length; i++) {
        imgElements[i].src = "/images/" + genreArray[i].image;
        textElements[i].textContent = genreArray[i].text;
    }
});