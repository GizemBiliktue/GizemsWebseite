<template>
    <div>
      <button class="chat-toggle-btn" :class="{'active': isChatVisible}" @click="toggleChat">
        <img src="../assets/chatbot.svg" alt="Chat Icon" class="chat-icon" />
      </button>
  
      <div class="chatbot-container" v-if="isChatVisible">
        <div class="chatbot-header">
          <img src="/gizem.png" alt="Chat Icon" class="chatbot-icon"/>
          <div class="chatbot-header-text">
            <strong>Gizem Bot</strong>
            <p>{{$t('chatbot.header')}}</p>
          </div>
        </div>
        <div class="chatbot-messages">
          <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender === 'bot' ? 'bot-message' : 'user-message']">
            <div class="message-content">
              {{ message.text }}
            </div>
          </div>
        </div>
        <div class="chatbot-input-container">
          <input
            v-model="userInput"
            type="text"
            :placeholder="$t('chatbot.message')"
            @keyup.enter="sendMessage"
            class="chatbot-input"
          />
            <button @click="sendMessage" class="chatbot-send-btn">
                <img src="../assets/sendBtn.svg" alt="Send" class="send-icon"/>
            </button>
        </div>
      </div>
    </div>
  </template>
  
  
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useI18n } from 'vue-i18n';

const userInput = ref('');
const { t, locale } = useI18n();
const isChatVisible = ref(false);

const messages = ref([
  { sender: 'bot', text: t("chatbot.welcome")}
]);

const predefinedQuestions = {
    "hello":  ["chatbot.hello", "chatbot.hello2", "chatbot.hello3"],
    "hallo": ["chatbot.hello", "chatbot.hello2", "chatbot.hello3"],  
    "hi": ["chatbot.hello", "chatbot.hello2", "chatbot.hello3"],
    "how are you": "chatbot.how_are_you",
    "what's your name": "chatbot.what_is_your_name",
    "bye": "chatbot.bye"
};

const toggleChat = () => {
  isChatVisible.value = !isChatVisible.value;
};

const sendMessage = async () => {
  if (userInput.value.trim() === '') return;

  const userMessage = userInput.value.toLowerCase().trim();
  messages.value.push({ sender: 'user', text: userInput.value });
  userInput.value = '';

  // Send the user message to the Flask backend
  try {
    const response = await axios.post('http://127.0.0.1:5000/chatbot', { message: userMessage });
    const botResponse = response.data.response;
    messages.value.push({ sender: 'bot', text: botResponse });
  } catch (error) {
    console.error('Error sending message:', error);
    messages.value.push({ sender: 'bot', text: "Sorry, I didn't understand that." });
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
  transition: background-color 0.3s ease;
}

.chat-toggle-btn.active {
  background-color: #5d989d;
}

.chat-toggle-btn img {
  width: 40px;
  height: 40px;
}

.chatbot-container {
    margin-bottom: 15px;
    width: 375px;
    height: 620px;
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
  padding: 22px;
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
  font-size: 1.0em;
}

.chatbot-header-text p {
  font-size: 0.8em;
  margin: 0;
}

.chatbot-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background-color: #ece7dc;
}

.message {
  margin: 10px 0;
  display: flex;
  font-size: 21px;
}

.user-message {
    justify-content: flex-end;
    display: flex;
}

.user-message .message-content {
    background-color: #85b1b5;
    padding: 15px;
    border-radius: 15px 15px 0px 15px;
    align-self: flex-end;
    max-width: 70%;
}

.bot-message .message-content {
    background-color: white;
    color: rgb(72, 137, 144);
    align-self: flex-start;
    padding: 15px;
    max-width: 70%;
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
    border-radius: 18px;
    padding: 8px 12px;
    margin-left: 10px;
    cursor: pointer;
    margin-bottom: 38px;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
}
.chatbot-send-btn:hover {
    background-color: #8abbbf;

}


.send-icon {
    width: 25px; 
    height: 22px;
    margin-left: 2px;
    margin-top: 4px;
}
</style>


  