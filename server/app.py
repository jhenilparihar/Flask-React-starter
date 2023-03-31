from flask import Flask, jsonify
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


if __name__ == '__main__':
    app.run(debug=True)
