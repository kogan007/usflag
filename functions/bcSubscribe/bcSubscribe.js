

const fetch = require('node-fetch')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const handler = async function (event, context) {
  if (!context.clientContext && !context.clientContext.identity) {
    return {
      statusCode: 500,
      
      body: JSON.stringify({
        msg: 'No identity instance detected. Did you enable it?',
      }),
    }
  }
  const { identity, user } = context.clientContext
  const subscribeURL = `${process.env.API_URL}/${process.env.STORE_HASH}/v3/customers/subscribers`
  
  try {
    const response = await fetch(subscribeURL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "X-Auth-Token": process.env.ACCESS_TOKEN
      },
      body: event.body
    })
    if (!response.ok) {
      
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()
    
    return {
      statusCode: 200,
      body: JSON.stringify(data.data)
    }
  } catch (error) {
    
    console.log(error)
    return {
      statusCode: 500,
      
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
