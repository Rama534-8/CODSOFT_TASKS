function sendMessage() {
    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    let userText = input.value.trim();

    if (userText === "") {
        return;
    }

    // User Message
    chatBox.innerHTML += `<div class="user-message"><b>You:</b> ${userText}</div>`;

    let message = userText.toLowerCase();
    let reply = "";

    if (message === "hi") {
        reply = "Hello! Welcome.";
    } else if (message === "hello") {
        reply = "Hi! How can I help you?";
    } else if (message === "how are you") {
        reply = "I am fine. Thank you!";
    } else if (message === "your name") {
        reply = "I am CodSoft AI Chatbot.";
    } else if (message === "python") {
        reply = "Python is a powerful programming language.";
    } else if (message === "ai") {
        reply = "AI stands for Artificial Intelligence.";
    } else if (message === "bye") {
        reply = "Goodbye! Have a nice day.";
    } else {
        reply = "Sorry, I don't understand.";
    }

    // Bot Message
    chatBox.innerHTML += `<div class="bot-message"><b>Bot:</b> ${reply}</div>`;

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}