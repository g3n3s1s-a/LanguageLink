from flask import Flask, request
from flask_cors import CORS


import requests

# Initialize Parse server details
parse_url = 'https://parseapi.back4app.com/'
parse_app_id = 'j0qWvftCyQapjaGIyP4bCvY7nZlKh10RuknVZ16E'
parse_js_key = 'PHo1Lil5rgkRPIDdRPKbpy6Y6euRwtl6ieNBmmoC'

# Define headers with application id and javascript key
headers = {
    'X-Parse-Application-Id': parse_app_id,
    'X-Parse-JavaScript-Key': parse_js_key,
    'Content-Type': 'application/json'
}
app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    response = app.make_response('Hello, World!')
    response.headers['Access-Control-Allow-Origin'] = '*'  # Allow requests from any origin
    return response

@app.route('/submit-data', methods=['POST'])
def submit_data():
    data = request.json.get('data')
    print('Received data:', data)
    # Do something with the received data
    print(type(data))
    try:
        # Define the data to be sent in the request
        request_data = {
            'language_name': data,
            
        }

        # Send a POST request to create a new Person object
        response = requests.post(parse_url + 'classes/language_to_learn', json=request_data, headers=headers)

        # Check if the request was successful
        if response.status_code == 201:
            print('Language added successfully')
        else:
            print('Error adding language:', response.text)

    except requests.RequestException as error:
        print('Request error:', error)

    return "That's all folks"


if __name__ == '__main__':
    app.run(debug=True)
