// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch')

const handler = async function (event, context) {
  if (!context.clientContext && !context.clientContext.identity) {
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({
        msg: 'No identity instance detected. Did you enable it?',
      }),
    }
  }
  const { identity, user } = context.clientContext
  const url = `${process.env.API_URL}/${process.env.STORE_HASH}/v3/storefront/api-token`;
  try {
    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    const date = secondsSinceEpoch + 1000000;
    const bcData = JSON.stringify({
      "channel_id": 1,
      "expires_at": date
    })
    const config = {
      method: "POST",
      headers: {
        'X-Auth-Token': process.env.ACCESS_TOKEN,
        'Content-Type': 'application/json'
      },
      body: bcData
    }

    
    const response = await fetch(url, config)
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    console.log(data);

    return {
      statusCode: 200,
      body: JSON.stringify({token: data.data.token}),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
