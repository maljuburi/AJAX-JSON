var page = 1;
var dataContainer = document.getElementById("data");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    
    ourRequest.open("GET", "https://maljuburi.github.io/JSON/json-"+page+".json");
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);    
    };
    ourRequest.send();
    page++;
    if(page>3){
        btn.classList.add("hide-me");
    }
});


function renderHTML(data){
    var htmlstring = "";
    for(var i=0; i<data.length; i++){
        htmlstring += "<p>" + data[i].name + " is a " + data[i].species +"that likes to eat ";
        for(var ii=0; ii < data[i].foods.likes.length; ii++){
            if(ii == 0){
                htmlstring += data[i].foods.likes[ii];
            }else{
                htmlstring += " and " + data[i].foods.likes[ii];
            }
        }

        htmlstring += " and dislikes ";
        for (var ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlstring += data[i].foods.dislikes[ii];
            } else {
                htmlstring += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlstring += ".</p>";
    }
    dataContainer.insertAdjacentHTML('beforeend',htmlstring);
}