from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Flask backend!"

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    print("Received data:", data)  # Debug print
    username = data['username']
    password = data['password']
    # Add your authentication logic here
    return jsonify({"message": "Login successful"})

if __name__ == '__main__':
    app.run(debug=True)
