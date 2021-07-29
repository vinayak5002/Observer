var base = "https://inshortsv2.vercel.app/news?type=";
var postfix = "&limit=23";
var type = "all_news";
var temp;

//dark mode toggle
var data = localStorage.getItem("counter");
var counter = parseInt(data);

if(counter % 2 == 0){
    light();
}
else{
    dark();
}


function change(cat){
    document.getElementById("cat").innerHTML = cat.innerHTML;
    if(cat.innerHTML === "Home"){
        temp = "all_news"
    }
    else{
        temp = cat.innerText.toLowerCase();
    }
    type = temp;
    
    Load();
}

function Load(){
    async function API() {
        let response = await fetch(base+type+postfix);
        let data = await response.json();
        return data;
    }
    
    API().then( data => {
        for(var i=0; i<10; i++){
            document.getElementById(`head${i+1}`).innerHTML = data.articles[i].title;
            document.getElementById(`img${i+1}`).src = data.articles[i].image_url;
            document.getElementById(`txt${i+1}`).innerHTML = data.articles[i].description;
        }
    });
}

var toTop = document.getElementById("to-top");
console.log(toTop);
toTop.style.display = "none";

window.addEventListener("scroll", () => {
    console.log('scroll');
    if (window.pageYOffset > 100) {
        toTop.style.display = "block";
    }
    else{
        toTop.style.display = "none";
    }
});

function darkLight(){
    counter++;
    if(counter % 2 == 0){
        light();
    }
    else{
        dark();
    }
    localStorage.setItem("counter", counter.toString());
}

function light(){
    var modeBtn = document.getElementById("mode-btn");
    modeBtn.innerHTML  = '<i id="mode" class="fas fa-moon">';

    var lightNav = document.getElementById("nav");
    lightNav.style.backgroundColor = "tomato";

    var lightCard = document.getElementsByClassName("card");
    for(var i=0; i<lightCard.length; i++){
        lightCard[i].style.backgroundColor = "white";
        lightCard[i].style.border = "solid white 3px";
    }

    var lightFeed = document.getElementsByClassName("feed");
    for(var i=0; i<lightFeed.length; i++){
        lightFeed[i].style.backgroundColor = "antiquewhite";
        lightFeed[i].style.border = "solid antiquewhite 3px";
    }

    var text = document.getElementsByTagName("p");
    for(var i=0; i<text.length; i++){
        text[i].style.color = "black";
    }

    var text = document.getElementsByTagName("h4");
    for(var i=0; i<text.length; i++){
        text[i].style.color = "black";
    }

    var top = document.getElementById("top-btn");
    top.src = "./images/backtotop.png";

    document.body.style.background = "rgb(255, 156, 27)";
}

function dark(){
    var modeBtn = document.getElementById("mode-btn");
    modeBtn.innerHTML  = '<i id="mode" class="fas fa-sun">';

    var darkNav = document.getElementById("nav");
    darkNav.style.backgroundColor = "rgb(100, 100, 100)";

    var darkCard = document.getElementsByClassName("card");
    for(var i=0; i<darkCard.length; i++){
        darkCard[i].style.backgroundColor = "rgb(100, 100, 100)";
        darkCard[i].style.border = "solid rgb(100, 100, 100) 3px";
    }

    var darkFeed = document.getElementsByClassName("feed");
    for(var i=0; i<darkFeed.length; i++){
        darkFeed[i].style.backgroundColor = "rgb(100, 100, 100)";
        darkFeed[i].style.border = "solid rgb(100, 100, 100) 3px";
    }

    var text = document.getElementsByTagName("p");
    for(var i=0; i<text.length; i++){
        text[i].style.color = "white";
    }

    var text = document.getElementsByTagName("h4");
    for(var i=0; i<text.length; i++){
        text[i].style.color = "white";
    }

    var top = document.getElementById("top-btn");
    top.src = "./images/dark top.png";

    document.body.style.background = "rgb(53, 53, 53)";
}

