var AWS = require("aws-sdk");

var docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});

var params = {
    TableName: "Events",
    ProjectionExpression: "province, Info"
};

docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log("Scan succeeded.");
        console.log(JSON.stringify(data));
    
    }
}
