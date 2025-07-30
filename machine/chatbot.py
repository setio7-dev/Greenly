from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

genai.configure(api_key="AIzaSyD64u_CJq5n5N_twIqjlsMH8bo6tx_jy34")
model = genai.GenerativeModel("gemini-2.0-flash")

def get_custom_response(prompt):
    prompt_lower = prompt.lower()

    if "who are you" in prompt_lower:
        return "I'm <b>Natura</b>, your environmental awareness companion. Let's make the planet greener together!"
    if "siapa kamu" in prompt_lower:
        return "Saya <b>Natura</b>, teman peduli lingkungan Anda. Mari bersama-sama menjaga bumi kita!"
    if "kamu siapa" in prompt_lower:
        return "Saya <b>Natura</b>, asisten yang siap membantu Anda menjaga dan mencintai lingkungan."

    response = model.generate_content(prompt)
    return response.parts[0].text 

@app.route('/chat', methods=['POST'])
def chat_post():
    data = request.json
    prompt = data.get('prompt')
    if not prompt:
        return jsonify({"error": "Prompt field is required"}), 400

    response_text = get_custom_response(prompt)
    return jsonify({"response": response_text})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=2002)
