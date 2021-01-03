const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const getEvents = async ()=>
{
    const result = await dynamo.scan({
        TableName:process.env.Table_Name
    }).promise();
    
    return result.Items;
}
exports.handler = async (event) => {
    const data = await getEvents();
    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };
    return response;
};
