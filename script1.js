
var number = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
var star_div = document.getElementById("star_div");
for(var i=0;i<number;i++){
    star_div.innerHTML = star_div.innerHTML + '<img src="star.png" class = "myStar" width="20"/>';
}
var array1=["我爱你鸭","我要代表月亮保护你","感谢神把那么可爱的你给我哈~","抱抱","爱爱","亲亲","举高高","想抱你~","LOVE","KISS","SMASH","HUG","时间过得快一点啊","抱抱","宝宝~","按摩摩","吃饭饭","亲亲","爱爱","睡觉觉","躺躺"];
var img = document.getElementsByClassName('myStar');
for (const star of img) {
    star.style.position="absolute";
    star.style.innerText=array1[Math.floor(Math.random() * 7) + 1];
    star.style.top = (Math.floor(Math.random() * 500) + 10) + "px"; 
    star.style.left = (Math.floor(Math.random() * 1500) + 10) + "px";
    star.style.width = (Math.floor(Math.random() * 20) + 10) + "px";
    star.style.transform =  `rotate(${Math.floor(Math.random() * 180+90)}deg)`
    star.addEventListener("mouseover",function(){
        this.src="star1.png";
        console.log("1");
    });
    
    
    star.addEventListener("mouseout",function(){
        this.src="star.png";
        console.log("2");
    });
    
}
function calculate(){
    var start_date=new Date("04/16/2022");
    var today = new Date();
    var difference = start_date.getTime() - today.getTime();
    var days = Math.abs(Math.ceil(difference / (1000 * 3600 * 24)));
    document.getElementById("day").innerHTML = "D-"+ days;
    console.log("hi");
}

calculate();





// Get the modal
var modal = document.getElementById('myModal');
var star_text = document.getElementById('star-text');
// Get the button that opens the modal
var btns = document.getElementsByClassName('myStar');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
for(const btn of btns){
    btn.onclick = function() {
        modal.style.display = "block";
        star_text.innerText=array1[Math.floor(Math.random() * 20)];
    }
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modalLucky = document.getElementById("myModalLucky");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var lucky = document.getElementById("lucky");
var modalImgLucky = document.getElementById("lucky1");
var ball_color_both=0;

var count=0;
var arr_color=["red.png","blue.png","yellow.png","lightblue.png","grey.png","purple.png","pink.png","green.png"];
var arr_color_open=["red_open.png","blue_open.png","yellow_open.png","lightblue_open.png","grey_open.png","purple_open.png","pink_open.png","green_open.png"];
var arr_ticket=["t1.png","t2.png","t3.png","t4.png","t5.png","t6.png"]
lucky.onclick = function(){
  modalImgLucky.style.maxWidth="100px";
  var ball_color = Math.floor(Math.random() * 7);
  ball_color_both = ball_color;
  modalLucky.style.display = "block";
  modalImgLucky.src = arr_color[ball_color_both];
}

modalImgLucky.onclick = function(){
    if(count==0){
        modalImgLucky.style.maxWidth="100px";
        modalImgLucky.src = arr_color_open[ball_color_both];
        count=1;
        
    }
    else if(count==1){
        modalImgLucky.style.maxWidth = "800px";
        var ticket = Math.floor(Math.random() * 5);
        modalImgLucky.src = arr_ticket[ticket];
        count=2; 
    }
    else if(count==2){
        modalLucky.style.display = "none";
        count=0;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeLucky")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modalLucky.style.display = "none";
}



// Love
var love = setInterval(function () {
    var start = 0;
    if(start==0){
        var r_num = Math.floor(Math.random() * 40) + 1;
        var r_size = Math.floor(Math.random() * 65) + 10;
        var r_left = Math.floor(Math.random() * 100) + 1;
        var r_bg = Math.floor(Math.random() * 25) + 100;
        var r_time = Math.floor(Math.random() * 5) + 5;
    
        $(".bg_heart").append(
        "<div class='heart' style='width:" +
            r_size +
            "px;height:" +
            r_size +
            "px;left:" +
            r_left +
            "%;background:rgba(255," +
            (r_bg - 25) +
            "," +
            r_bg +
            ",1);-webkit-animation:love " +
            r_time +
            "s ease;-moz-animation:love " +
            r_time +
            "s ease;-ms-animation:love " +
            r_time +
            "s ease;animation:love " +
            r_time +
            "s ease'></div>"
        );
    
        $(".bg_heart").append(
        "<div class='heart' style='width:" +
            (r_size - 10) +
            "px;height:" +
            (r_size - 10) +
            "px;left:" +
            (r_left + r_num) +
            "%;background:rgba(255," +
            (r_bg - 25) +
            "," +
            (r_bg + 25) +
            ",1);-webkit-animation:love " +
            (r_time + 5) +
            "s ease;-moz-animation:love " +
            (r_time + 5) +
            "s ease;-ms-animation:love " +
            (r_time + 5) +
            "s ease;animation:love " +
            (r_time + 5) +
            "s ease'></div>"
        );
    
        $(".heart").each(function () {
        var top = $(this)
            .css("top")
            .replace(/[^-\d\.]/g, "");
        var width = $(this)
            .css("width")
            .replace(/[^-\d\.]/g, "");
        if (top <= -100 || width >= 150) {
            $(this).detach();
        }
        });
    }
    start += 100;
    if(start==200){
        clearInterval(love);
    }
}, 2000);


// Get the modal
var modalGift = document.getElementById("myModalGift");
function playAudio(url) {
    new Audio(url).play();
}
// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgGift = document.getElementById("myImgGift");
var modalImgGift = document.getElementById("img01Gift");
imgGift.onclick = function(){
  modalGift.style.display = "block";
  modalImgGift.src = "birth.png";
  modalImgGift.style.width = "450px";
  playAudio('birthdaySong.mp3')
}

// Get the <span> element that closes the modal
var spanGift = document.getElementsByClassName("closeGift")[0];

// When the user clicks on <span> (x), close the modal
spanGift.onclick = function() { 
  modalGift.style.display = "none";
}
