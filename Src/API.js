var base = "https://inshortsv2.vercel.app/news?type=";
var postfix = "&limit=27";
var type = "all_news";
var temp;
var more = 0, start = 5, end = 10;

function change(cat){
    window.scrollTo(0, 0);
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
    more = 0; start = 5; end = 10;
    async function API() {
        let response = await fetch(base+type+postfix);
        let data = await response.json();
        return data;
    }
    
    API().then( data => {
        var news = document.getElementById("news");
        news.innerHTML = "";
        for(var i=0; i<10; i++){
            news.innerHTML += `<div class="card">
                <div class="row">
                    <div width="30%" class="column1">
                        <img id="img${i+1}" src="" width="100%" margin-left="0px" alt="">
                    </div>
                    <div width="70%" class="column2">
                        <h4 id="head${i+1}"></h4>
                        <p id="txt${i+1}"></p>
                    </div>
                </div>
            </div>`;
            document.getElementById(`head${i+1}`).innerHTML = data.articles[i].title;
            document.getElementById(`img${i+1}`).src = data.articles[i].image_url;
            document.getElementById(`txt${i+1}`).innerHTML = data.articles[i].description;
        }
    });
}

function loadMore(){
    if(more < 3){
        more++;
        console.log(more);
        start+=5;end+=5;
        async function API() {
            let response = await fetch(base+type+postfix);
            let data = await response.json();
            return data;
        }
        
        API().then( data => {
            for(var i=start; i<end; i++){
                var news = document.getElementById("news");
                news.innerHTML += `<div class="card">
                <div class="row">
                    <div width="30%" class="column1">
                        <img id="img${i+1}" src="" width="100%" margin-left="0px" alt="">
                    </div>
                    <div width="70%" class="column2">
                        <h4 id="head${i+1}"></h4>
                        <p id="txt${i+1}"></p>
                    </div>
                </div>
            </div>`;
                document.getElementById(`head${i+1}`).innerHTML = data.articles[i].title;
                document.getElementById(`img${i+1}`).src = data.articles[i].image_url;
                document.getElementById(`txt${i+1}`).innerHTML = data.articles[i].description;
            }
        });
    }
    else{
        document.getElementById("read-more").innerHTML = "Unable to load more"
    }
}