function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();

    if (messageText !== "") {
        addMessage('user', messageText);
        userInput.value = "";

        setTimeout(() => {
            const botResponse = generateBotResponse(messageText);
            addMessage('bot', botResponse);
        }, 1000);
    }
}

function addMessage(sender, text) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);

    const img = document.createElement('img');
    img.src = sender === 'bot' ? 'robo.png' : 'user-icon.png';
    img.alt = sender;

    const messageText = document.createElement('div');
    messageText.classList.add('message-text');
    messageText.textContent = text;

    messageDiv.appendChild(img);
    messageDiv.appendChild(messageText);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userMessage) {
    let response = "I'm sorry, I didn't understand your issue. Please provide more details about the login problem you're facing, or try the following common solutions:\n1. Check your internet connection.\n2. Ensure you are entering the correct login credentials.\n3. Use the 'Forgot Password' link if you need to reset your password.";

    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        response = "Hello! How can I assist you today?";
    } else if (lowerCaseMessage.includes("login issue") || lowerCaseMessage.includes("cannot login") ||
               lowerCaseMessage.includes("forgot password") || lowerCaseMessage.includes("locked account") || 
               lowerCaseMessage.includes("username not found")) {
        response = getLoginIssueResponse(lowerCaseMessage);
    }
    
    return response;
}

function getLoginIssueResponse(message) {
    if (message.includes("forgot password")) {
        return "It looks like you've forgotten your password. Here are the steps to reset it:\n1. Go to the login page.\n2. Click on the 'Forgot Password' link.\n3. Enter your registered email address.\n4. Check your email for the password reset link and follow the instructions.";
    } else if (message.includes("locked account")) {
        return "If your account is locked, please follow these steps to unlock it:\n1. Go to the login page.\n2. Click on the 'Unlock Account' link (if available).\n3. Enter your registered email address.\n4. Check your email for the account unlock link and follow the instructions.\nIf the issue persists, contact our support team for assistance.";
    } else if (message.includes("username not found")) {
        return "If you are seeing a 'username not found' error, please try the following steps:\n1. Make sure you have entered the correct username.\n2. If you have forgotten your username, click on the 'Forgot Username' link on the login page.\n3. Enter your registered email address to retrieve your username.";
    } else if (message.includes("cannot login")) {
        return "If you are unable to login, please try the following steps:\n1. Ensure that you are entering the correct username and password.\n2. Make sure your internet connection is stable.\n3. Clear your browser's cache and cookies.\n4. If you have forgotten your password, use the 'Forgot Password' link to reset it.\nIf the issue persists, contact our support team for further assistance.";
    } else {
        return "I'm sorry, I didn't understand your issue. Please provide more details about the login problem you're facing, or try the following common solutions:\n1. Check your internet connection.\n2. Ensure you are entering the correct login credentials.\n3. Use the 'Forgot Password' link if you need to reset your password.";
    }
}
