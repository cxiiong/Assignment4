// Function for Bigger button
function makeBigger() {
     document.getElementById("myText").style.fontSize = "24pt";
}

// Function for radio buttons
function applyStyle() {
    var textArea = document.getElementById("myText");

    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function for "Moo" button
function mooify() {
    var textArea = document.getElementById("myText");
    var text = textArea.value;

    text = text.toUpperCase();

    // Add "-Moo" to the last word of each sentence
    var sentences = text.split(".");  // split by period
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence.length > 0) {
            var words = sentence.split(" ");
            words[words.length - 1] += "-Moo"; 
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(". ") + (text.endsWith(".") ? "." : "");
}


