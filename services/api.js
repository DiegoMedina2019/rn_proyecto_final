import React from 'react'

const url = 'https://todolist-node-production.up.railway.app/'

export const userRegister = async (data) => {

    return await fetch(`${url}user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then((response) => response.json())
    .then((data) => {
      console.log("API: ",data);
      return data
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
        throw error;
    });

}

export const userLogin = async (data) => {

  return await fetch(`${url}user/Login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then((response) => response.json())
  .then((data) => {
    console.log("API: ",data);
    return data
  }).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
      // ADD THIS THROW error
      throw error;
  });
  
}

export const setTokenAuthentication = async (token) => {

  return await fetch(`${url}user/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }).then(function(response){
    let result = response.json();
    console.log(result);
    return result
  }).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
      // ADD THIS THROW error
      throw error;
  });
  
}
