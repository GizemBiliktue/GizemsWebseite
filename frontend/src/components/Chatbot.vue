<template>
    <div>
      <button class="chat-toggle-btn" @click="toggleChat">
        <img src="/gizem.png" alt="Chat Icon" class="chat-icon" />
      </button>
  
      <div class="chatbot-container" v-if="isChatVisible">
        <div class="chatbot-header">
          <img src="/gizem.png" alt="Chat Icon" class="chatbot-icon"/>
          <div class="chatbot-header-text">
            <strong>Gizem Bot</strong>
            <p>How can I help you?</p>
          </div>
        </div>
        <div class="chatbot-messages">
          <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender === 'bot' ? 'bot-message' : 'user-message']">
            <div class="message-content">
              <span v-if="message.sender === 'bot'">Gizem:</span>
              <span v-if="message.sender === 'user'">You:</span>
              {{ message.text }}
            </div>
          </div>
        </div>
        <div class="chatbot-input-container">
          <input
            v-model="userInput"
            type="text"
            placeholder="Write a message..."
            @keyup.enter="sendMessage"
            class="chatbot-input"
          />
          <button @click="sendMessage" class="chatbot-send-btn">Send</button>
        </div>
      </div>
    </div>
  </template>
  
  
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Beispiel für vordefinierte Fragen und Antworten
const predefinedResponses = {
  "hello": "Hi there! How can I help you today?",
  "how are you": "I'm well and feel lucky, thanks for asking!",
  "what's your name": "I'm Gizem Biliktü. I try to assist you in this chat :)",
  "bye": "Goodbye! Have a great day!"
};

const isChatVisible = ref(false);
const messages = ref([
  { sender: 'bot', text: 'Hello! How is it going?' }
]);
const userInput = ref('');

const toggleChat = () => {
  isChatVisible.value = !isChatVisible.value;
};

const sendMessage = async () => {
  if (userInput.value.trim() === '') return;

  const userMessage = userInput.value.toLowerCase().trim();
  messages.value.push({ sender: 'user', text: userInput.value });
  userInput.value = '';

  // Überprüfen, ob die Benutzeranfrage in den vordefinierten Antworten enthalten ist
  if (predefinedResponses[userMessage]) {
    const botResponse = predefinedResponses[userMessage];
    messages.value.push({ sender: 'bot', text: botResponse });
  } else {
    messages.value.push({ sender: 'bot', text: "Sorry, I don't understand that question." });
  }            
   
};
</script>

  
<style scoped>
.chat-toggle-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #ffecd7;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.chat-toggle-btn img {
  width: 55px;
  height: 55px;
}

.chatbot-container {
    margin-bottom: 15px;
    width: 375px;
    height: 620px;
    border: 1px solid #ccc;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.5);
    position: fixed;
    bottom: 100px; 
    right: 20px;
    z-index: 1000;
}

.chatbot-header {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #5d989d;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 22px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
}

.chatbot-header img.chatbot-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-left: 5px;
}

.chatbot-header-text {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    text-align: left;
}

.chatbot-header-text strong {
  font-size: 1.2em;
}

.chatbot-header-text p {
  font-size: 0.8em;
  margin: 0;
}

.chatbot-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background-color: #e7ddc9;
}

.message {
  margin: 10px 0;
  display: flex;
  font-size: 21px;
}

.user-message .message-content {
    background-color: #85b1b5;
    align-self: flex-end;
    padding: 15px;
    border-radius: 15px 15px 0px 15px;
}

.bot-message .message-content {
    background-color: white;
    color: rgb(72, 137, 144);
    align-self: flex-start;
    padding: 15px;
    border-radius: 15px 15px 15px 0px;
}

.message-content {
  max-width: 80%;
  padding: 8px;
  font-size: 0.9em;
}

.chatbot-input-container {
  display: flex;
  border-top: 1px solid #ccc;
  padding: 5px;
  background-color: white;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  height: 70px;
  align-items: center;
}

.chatbot-input {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 5px;
  padding-left: 12px;
  font-size: 17px;
  height: 35px;
}

.chatbot-send-btn {
    background-color: #5d989d;
    color: white;
    border: none;
    font-size: 18px;
    border-radius: 25px;
    padding: 10px 15px;
    margin-left: 10px;
    cursor: pointer;
    margin-bottom: 37px;
}
</style>


  