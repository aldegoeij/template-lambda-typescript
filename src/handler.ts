import { APIGatewayEvent, Context, APIGatewayProxyCallback } from "aws-lambda"

import * as Sentry from "@sentry/serverless"

Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
})

const yourHandler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: APIGatewayProxyCallback,
) => {
  return "hello :wave:!"
}

export default Sentry.AWSLambda.wrapHandler(yourHandler)
