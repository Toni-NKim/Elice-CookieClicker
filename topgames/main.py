import sqlite3
from flask import Flask, request, render_template

app = Flask(__name__)

# def get_db():
#     con = sqlite3.connect('games.db')
#     cur = con.cursor()

@app.route('/')
def index():
    return render_template('topgames.html')

# @app.route('/game', methods=['POST'])
# def like():
#     if request.method == 'POST':


if __name__ == "__main__":
    app.run(debug=True)