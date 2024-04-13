from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS for all routes

# Define an API endpoint to handle form submissions
@app.route('/submit-form', methods=['POST'])
def submit_form():
    try:
        # Extract data from the request
        data = request.json

        # Process the data as needed
        language = data.get('language')

        # Your logic to save language to the database or perform any other action

        return jsonify({'message': 'Language submitted successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
