from flask import Flask

app = Flask(__name__)

# Define a route for the root URL ("/")
@app.route('/')
def home():
    return "You have successfully run docker image!"

if __name__ == "__main__":
    # Ensure the app is running on 0.0.0.0 (accessible from outside the container)
    app.run(host="0.0.0.0", port=8080)
