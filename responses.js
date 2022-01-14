function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!<br> for more visit my linkedin page https://www.linkedin.com/in/abhilash-gaurav-8b0a911bb/";
    }
    else if(input=="nice"){
        return "Glad to know";
    }
    else if(input=="how to join to through this website"){
        return "You can simply fill the form available in the navigation bar our members will reach out to you";
    }
    else {
        return "Try asking something else!";
    }
}