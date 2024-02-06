const radio = document.getElementById("radiolink"); //Your radio/audio id:
const playbtn = document.getElementById("playbtn"); //play btn id:
const mutebtn = document.getElementById("mutebtn"); //mutebtn id:
let volumei = document.getElementById("audioslide"); //the voleme input slider:
let volume ; //a volume variable:
let playing = false; //variable if its playing or not:
let mute = false; //variable if its mute or not:

playbtn.onclick = function(){
    playing = !playing; //changes the variable to oposite

   if(playing == true){
    radio.play();
    console.log(playing);
    playbtn.className = "fa-solid fa-pause"
   }
   else if(playing == false){
    radio.pause();
    playbtn.className = "fa-solid fa-play"
    playing = false;
    
   }
   else{
    console.log('error');
   }
   }


mutebtn.onclick = function(){
    mute = !mute //changes the variable to oposite
   }


setInterval(volumef, 100); //runs volumef function  every 100ms

function volumef(){
    volume = volumei.value / 10 //take the data from the volume slider thats from 1 to 10 and divides by ten to get the radio ones from 0.0 to 1.0

    console.log(volume);
    

    if(volume > 0 && !mute ){
        mutebtn.className = "fa-solid fa-volume-high"
        radio.volume = volume; //it will make the volume the value of the volume thats at the start of this function
    
    }
    else if(volume == 0 || mute == true){
        mutebtn.className = "fa-solid fa-volume-off"
        radio.volume = 0; //it will set the radio volume to 0
    }
    
}
