import { APIGatewayEvent, Context, APIGatewayProxyCallback } from "aws-lambda"

import wrapper from "./wrapper"

const yourHandler = async (
  event: APIGatewayEvent,
  context: Context,
  _: APIGatewayProxyCallback,
) => {
  console.debug(event)
  console.debug(JSON.stringify(context))
  return {
    body: JSON.stringify({ data: `Hello world!` }),
    statusCode: 200,
  }
}

export default wrapper(yourHandler)
