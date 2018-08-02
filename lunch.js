document.addEventListener("DOMContentLoaded", function (event) {
    var sand1 = document.getElementById('mondayImage');
   
    sand1.addEventListener('click', function (e) {
        // sand1.src = "./images/sand.jpg"
        console.log(sand1.src)
        if (sand1.src === "file:///C:/Users/GWC10/Documents/GWC-lunch/images/sandwich.jpg") {
            sand1.src = "file:///C:/Users/GWC10/Documents/GWC-lunch/images/sand.jpg";
        } else if (sand1.src === "file:///C:/Users/GWC10/Documents/GWC-lunch/images/sand.jpg") {
            sand1.src = "file:///C:/Users/GWC10/Documents/GWC-lunch/images/sandwich.jpg";
        }
    });
});