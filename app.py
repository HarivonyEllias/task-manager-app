from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Un exemple de route pour afficher les tâches (pour l'instant, une liste vide)
tasks = ["etudier"]

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
    new_task = request.json.get('task')
    if new_task:
        tasks.append(new_task)
        return jsonify({'message': 'Task added!', 'tasks': tasks}), 201
    return jsonify({'message': 'Invalid task'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

