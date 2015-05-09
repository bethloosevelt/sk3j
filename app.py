
from flask import Flask
from flask import render_template
from werkzeug.serving import run_simple

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')

if __name__ == '__main__':
    #run_simple('homestylebeatz.com', 80, app)
    app.run()
