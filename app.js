//animation
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

//popup
function toggle(){
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup=document.getElementById('popup');
    popup.classList.toggle('active');
}
var close=document.getElementById("close-btn");
close.addEventListener("click",()=>{
    popup.classList.remove("active");
});

//contactus
function sendEmail() {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ritikalal9112@gmail.com",
    Password : "8277C93A701C40FCCDD14FF0D5C286A4221C",
    To : 'ritikalal9112@gmail.com',
    From : document.getElementById("email").value,
    Subject : 'Inquiry from '+document.getElementById("name").value,
    Body : document.getElementById("inquiry").value
    }).then(
      message => alert("Successful")
    );
}


//Appointment
function Book() {
    var type=document.getElementById("package-type");
    if (type=="Gold"){
        var t="Gold";}
    else if(type=="Platinum"){
        var t="Platinum";}
    else{
        var t="Diamond";}
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ritikalal9112@gmail.com",
    Password : "8277C93A701C40FCCDD14FF0D5C286A4221C",
    To : 'ritikalal9112@gmail.com',
    From : document.getElementById("email").value,
    Subject : 'Booking from '+document.getElementById("name").value,
    Body :'Booked a '+ t
    }).then(
      message => alert(message)
    );
}

//time
function select1(){
    document.getElementById("b1").style.background="rgb(5, 58, 72)"
    document.getElementById("b2").style.background="#969696"
    document.getElementById("b3").style.background="#969696"
    document.getElementById("b4").style.background="#969696"
}
function select2(){
    document.getElementById("b1").style.background="#969696"
    document.getElementById("b2").style.background="rgb(5, 58, 72)"
    document.getElementById("b3").style.background="#969696"
    document.getElementById("b4").style.background="#969696"
}
function select3(){
    document.getElementById("b1").style.background="#969696"
    document.getElementById("b2").style.background="#969696"
    document.getElementById("b3").style.background="rgb(5, 58, 72)"
    document.getElementById("b4").style.background="#969696"
}
function select4(){
    document.getElementById("b1").style.background="#969696"
    document.getElementById("b2").style.background="#969696"
    document.getElementById("b3").style.background="#969696"
    document.getElementById("b4").style.background="rgb(5, 58, 72)"
}
