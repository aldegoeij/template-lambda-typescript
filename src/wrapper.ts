import middy from "@middy/core"
import jsonBodyParser from "@middy/http-json-body-parser"
import errorHandler from "@middy/http-error-handler"
import secretsManager from "@middy/secrets-manager"
import * as Sentry from "@sentry/serverless"

// Types
import { Handler } from "aws-lambda"

Sentry.init({
  dsn: process.env.SENTRY_DSN,
})

async function middyWrapper(handler: Handler) {
  return middy(handler)
    .use(
      secretsManager({
        cache: true,
        secrets: { SERVICE: process.env.SERVICE_NAME || "missing_secret" },
        cacheExpiryInMillis: 60000,
      }),
    )
    .use(jsonBodyParser())
    .use(errorHandler())
}

export default Sentry.AWSLambda.wrapHandler(middyWrapper)
