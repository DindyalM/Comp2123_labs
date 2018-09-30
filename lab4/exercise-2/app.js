const say = require('say')

say.speak("Hello!");

say.stop();

say.speak("Hello?","Alex",0.5);

var sorryDave = function(){
    say.speak("i'm Sorry, Dave")
}

setTimeout(() => {
    sorryDave();
}, 5);