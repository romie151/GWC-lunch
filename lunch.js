document.addEventListener("DOMContentLoaded", function (event) {
    var sand1 = document.getElementById('mondayImage');
    sand1.addEventListener('click', function (e) {
        document.getElementById('mondayImage').src = "./images/sand.jpg"

        if (document.getElementById('mondayImage').src === "./images/sandwich.jpg") {
           return  document.getElementById('mondayImage').src = "./images/sand.jpg"
        } else if (document.getElementById('mondayImage').src === "./images/sand.jpg") {
            return document.getElementById('mondayImage').src === "./images/sandwich.jpg"
        }
    })
} )