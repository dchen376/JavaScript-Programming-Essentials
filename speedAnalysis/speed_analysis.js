let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText; //.value retrives the content typed in.  
    
    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime(); // captures the current timestamp 
    
    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest; //envoke the endTest() function
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true; // make the form uneditable.

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length; //after filtering, return the total word counts.

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}