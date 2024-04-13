from flask import Flask, request, jsonify

app = Flask(__name__)

# Define an API endpoint to handle form submissions
@app.route('/submit-form', methods=['POST'])
def submit_form():

    try:
        # Define the data to be sent in the request
        data = {
            'language_name': 'spanish'
        }

        # Send a POST request to create a new Person object
        response = requests.post(parse_url + 'classes/language_to_learn', json=data, headers=headers)

        # Check if the request was successful
        if response.status_code == 201:
            print('Person added successfully')
        else:
            print('Error adding person:', response.text)

    except requests.RequestException as error:
        print('Request error:', error)

if __name__ == '__main__':
    app.run(debug=True)
