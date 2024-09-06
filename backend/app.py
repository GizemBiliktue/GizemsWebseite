import openai
from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import json
import re

app = Flask(__name__)
CORS(app)

with open('intents.json') as file:
    intents = json.load(file)

def match_intent(message):
    for intent in intents['intents']:
        for pattern in intent['patterns']:
            if re.search(r'\b' + re.escape(pattern.lower()) + r'\b', message.lower()):
                return random.choice(intent['responses'])
    return "Sorry, I didn't understand that."

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    user_message = data.get("message", "")
    
    response = match_intent(user_message)
    
    return jsonify({"response": response})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
