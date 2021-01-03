const { DynamoDB } = require("aws-sdk");
var AWS = require("aws-sdk");

var docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});

var params = {
    TableName: "Events",
    ProjectionExpression: "province, Info"
};

async function scanEvents()
{
    var result = await docClient.scan(params).promise();
    console.log(result.Items);
    return result.Items;
}

exports.handler = async (event) =>
{
    console.log(event);
    let response = scanEvents();

    console.log(JSON.stringify(response))
    return {
        statusCode :200,
        body: JSON.stringify(response)
    };
}
