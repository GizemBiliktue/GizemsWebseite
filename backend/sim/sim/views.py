import os
import random
import re
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect, csrf_exempt
import json

from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from .forms import CreateUserForm


@ensure_csrf_cookie
@require_http_methods(['GET'])
def set_csrf_token(request):
    """
    We set the CSRF cookie on the frontend.
    """
    return JsonResponse({'message': 'CSRF cookie set'})


@require_http_methods(['POST'])
def login_view(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        email = data['email']
        password = data['password']
    except json.JSONDecodeError:
        return JsonResponse(
            {'success': False, 'message': 'Invalid JSON'}, status=400
        )

    user = authenticate(request, username=email, password=password)

    if user:
        login(request, user)
        return JsonResponse({'success': True})
    return JsonResponse(
        {'success': False, 'message': 'Invalid credentials'}, status=401
    )


def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logged out'})


@require_http_methods(['GET'])
def user(request):
    if request.user.is_authenticated:
        return JsonResponse(
            {'username': request.user.username, 'email': request.user.email}
        )
    return JsonResponse(
        {'message': 'Not logged in'}, status=401
    )


@require_http_methods(['POST'])
def register(request):
    data = json.loads(request.body.decode('utf-8'))
    form = CreateUserForm(data)
    if form.is_valid():
        form.save()
        return JsonResponse({'success': 'User registered successfully'}, status=201)
    else:
        errors = form.errors.as_json()
        return JsonResponse({'error': errors}, status=400)

def post_list(request):
    return render(request, 'sim/post_list.html', {})


INTENTS_PATH = os.path.join(os.path.dirname(__file__), 'intents.json')

@csrf_exempt  
def chatbot_response(request):
    if request.method == 'POST':
        with open(INTENTS_PATH, 'r') as file:
            intents = json.load(file)

        data = json.loads(request.body)
        user_message = data.get('message', '').lower()

        def match_intent(message):
            for intent in intents['intents']:
                for pattern in intent['patterns']:
                    if re.search(r'\b' + re.escape(pattern.lower()) + r'\b', message):
                        return random.choice(intent['responses'])
            return "Sorry, I didn't understand that."

        bot_response = match_intent(user_message)

        return JsonResponse({"response": bot_response})

    return JsonResponse({"error": "Invalid request method."}, status=400)