from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return "SERVER IS RUNNING!!"

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    print("Received data:", data)  # Debug print
    username = data['username']
    password = data['password']
    return jsonify({"message": "Login successful"})

if __name__ == '__main__':
    app.run(debug=True)
