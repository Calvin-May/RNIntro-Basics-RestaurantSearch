// Import Axios
import axios from 'axios';

// Create and Export Axios Instance...
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses', // Base URL of our API
  // Data to insert into the Header of the API requests
  headers: {
    // Provide authorization for the API
    Authorization:
      'Bearer KYa0WJPuoVaE1XNx5pClnHPalw7NPWWgClaUkWG6_2r5nj5CK2bvEeSLlUteebd_ODDrFnqhppSGx0ZUICWEEa663gqcPY7p_KX3evAq0r7BVnlm7r9vHqbhZoKKZ3Yx',
  },
});
