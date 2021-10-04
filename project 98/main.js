var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}

recognition.onresult = function run(event) {


    console.log(event);
    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if(Content =="take my selfie")
    {
        console.log("taking selfie --- ")
        speak()
    }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "takingg your selfie in 5...4...3...2...1"

    var  speakThis= new SpeechSynthesisUtterance(speak_data)

    synth.speak(speakThis)
    
}