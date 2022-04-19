
exports.handler = async (event) => {
    console.log(event) // to help with testing
    const customerId = event.pathParameters.customerId;
    const customer = {'customerId': customerId, 'customerName': "Customer " + customerId };
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify(customer),
    };
    return response;
};