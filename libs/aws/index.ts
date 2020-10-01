import AWS from "aws-sdk"
import XRay from "aws-xray-sdk-core"

// Advisable to import clients individually!
import DynamoDB from "aws-sdk/clients/dynamodb"

// Do not enable tracing for 'invoke local'
const awsWrapped = process.env.IS_LOCAL ? AWS : XRay.captureAWS(AWS)

export default awsWrapped
