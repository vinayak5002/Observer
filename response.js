var count = 0;

function Drop(){
    count++;
    var drop = document.getElementById("drop");
    if(count %2 === 0){
        drop.style.display = "none";
    }
    else{
        drop.style.display = "block";
    }
}