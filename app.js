function talk(){
    var know = {
        "Who are you" : "Hello, prashanth here ",
        "How are you" : "Good :)",
        "say about yourself" : "I am artist , cinematographer , editor follow here for more info : prashanth_poojari_9889",
        "what you do in your free time" : " watch movie , play , edit , write script , painting etc ",
        "what you like in me" : " your kind nature and charactor ",
        "Who is your gf" : "finding someone special ",
        "ok" : "Thank You So Much ",
        " Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
            document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
            document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
        }
    }