import React from 'react'

const url = 'https://todolist-node-production.up.railway.app/'

export const userRegister = async (data) => {

    await fetch(url +'user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then(function(response){
        let result = response.json();
        console.log(result);
        return result
      }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });
     // return response.json(); // parses JSON response into native JavaScript objects
}
