# lambda-template

My highly opinionated AWS Lambda template.

## Customization steps:

When you clone this repo to build your own lambda service, please make these adjustments to your `serverless.yml`:

1. Change `domain` to something that makes sense
2. Change `service` to a name that you will not change soon

## Using AWS Secrets Manager

The IAM role for the provider allows all the functions in this service to access Secret Manager secrets that are tagged with `Service:YourServiceName`.

However, in `wrapper.ts` you'll have to add each secret if you don't use a single JSON secret for all functions!
