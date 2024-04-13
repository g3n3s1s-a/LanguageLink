// Function to fetch users with a specific username from Back4App
export const getUsersFromBack4App = async (username) => {
  // Replace these values with your actual credentials
  const applicationId = 'KIqm07VOYI2WL0XVKcgAmt4f69WAVDZPsklUXeA6';
  const restApiKey = 'u2TXSCSJ60tkst790RLnaoGja01FkGLO8dswhzdL';

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
export const createUser = async (userData) => {

  const url = 'https://parseapi.back4app.com/users';
  const applicationId = 'KIqm07VOYI2WL0XVKcgAmt4f69WAVDZPsklUXeA6';
  const restApiKey = 'u2TXSCSJ60tkst790RLnaoGja01FkGLO8dswhzdL';


  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': applicationId,
        'X-Parse-REST-API-Key': restApiKey,
        'X-Parse-Revocable-Session': 1,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error(`Failed to sign up user: HTTP error ${response.status}`);
    }

    const responseData = await response.json();
    console.log('User signed up successfully:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error while signing up user:', error);
    throw error;
  }
};


