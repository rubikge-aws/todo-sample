from flask import Flask, request, jsonify

app = Flask(__name__)

# Data storage (in a real application, it's better to use a database)
todos = {
    "user1": [
        {"title": "Complete project documentation", "completed": False},
        {"title": "Review merge requests", "completed": False},
        {"title": "Update dependencies", "completed": False}
    ],
    "user2": [
        {"title": "Call client", "completed": False},
        {"title": "Go shopping", "completed": True},
        {"title": "Schedule meeting", "completed": False}
    ]
}

@app.route('/todos', methods=['GET'])
def get_todos():
    user = request.args.get('user')
    if user in todos:
        return jsonify(todos[user])
    else:
        return jsonify({"error": "User not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)