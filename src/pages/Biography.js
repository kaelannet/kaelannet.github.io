import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Biography() {
  const [bio, setBio] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/biography/')  // TODO: update this when you no longer are only hosting on local development server
      .then(response => {
        // Assuming the API returns an array, and we want the first item
        setBio(response.data[0].bio_text);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Biography</h1>
      <p>{bio}</p>
    </div>
  );
}

export default Biography;
