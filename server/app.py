from flask import Flask, jsonify, json, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
db = SQLAlchemy(app)


class TodoModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id}, {self.content}'


def todo_serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content
    }


@app.route('/api', methods=['GET'])
def index():
    todo = TodoModel.query.all()
    return jsonify([*map(todo_serializer, todo)])


@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    todo = TodoModel(content=request_data['content'])

    db.session.add(todo)
    db.session.commit()

    return {'201': 'Todo created successfully!'}


@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(todo_serializer, TodoModel.query.filter_by(id=id))])


@app.route('/api/<int:id>/delete', methods=['DELETE'])
def delete(id):
    todo = db.get_or_404(TodoModel, id)

    if request.method == "DELETE":
        db.session.delete(todo)
        db.session.commit()

        return {"251": "Todo deleted succefullt!"}

    return jsonify([*map(todo_serializer, TodoModel.query.filter_by(id=id))])


if __name__ == '__main__':
    app.run(debug=True)
