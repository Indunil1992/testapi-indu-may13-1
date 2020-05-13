let Swagger = require('swagger-client');

exports.handler = async (event) => {
    try {
        let response = await Swagger.http({
            url: `https://paper-api.alpaca.markets/v2/positions`,
            method: 'delete',
            query: {},
            headers: { "Accept": "application/json" }
        });
        // your code goes here
console.log(response)
    } catch (err) {
        console.log(err)
        // error handling goes here
    }

    return { "message": "Successfully executed" };
};