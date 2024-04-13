// Function to fetch users with a specific username from Back4App
export const getUsersFromBack4App = async (username) => {
  // Replace these values with your actual credentials
  const applicationId = 'j0qWvftCyQapjaGIyP4bCvY7nZlKh10RuknVZ16E';
  const restApiKey = 'HA9QADek4k3Jo2YRVkZ9qTPqtQKBVq9ds64ICSRN';

  // Construct the URL with query parameters to filter users by username
  const url = `https://parseapi.back4app.com/classes/_User?where={"username":"${username}"}`;

  try {
    // Make the GET request
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': applicationId,
        'X-Parse-REST-API-Key': restApiKey,
        'Content-Type': 'application/json'
      }
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
    return data.results; // Return the array of users
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Re-throw the error for better error handling
  }
};
