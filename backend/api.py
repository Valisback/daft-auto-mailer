from flask import Flask
from server.server import return_time
  
# Initializing flask app
app = Flask(__name__)
  
  
@app.route('/data')
def get_time():
  
    # Returning an api for showing in  reactjs
    return return_time()
  
      
if __name__ == '__main__':
    app.run(debug=True, port=5050)