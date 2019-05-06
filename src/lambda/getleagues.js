const axios = require(`axios`);

exports.handler = (event, context, callback) => {
  const { API_URL, TOKEN } = process.env;

  const QUERY = `/leagues`;
  const URL = `${API_URL}${QUERY}?token=${TOKEN}`;

  // send response
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    });
  };

  // perform api call
  const getLeagues = () => {
    axios
      .get(URL)
      .then(res => {
        const body = {
          "current-page": res.headers[`x-page`],
          "total-results": res.headers[`x-total`],
          "per-page": res.headers[`x-per-page`],
          data: res.data,
        };

        send(body);
      })
      .catch(err => send(err));
  };

  // make sure method is GET
  if (event.httpMethod === `GET`) {
    getLeagues();
  }
};
