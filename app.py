from flask import Flask

app = Flask(__name__)
 
@app.route('/')
def index():
    return 'Welcome to Daft Auto Mailer'
 
if __name__ == '__main__':
    app.run(host='localhost', port=5050, debug=True)