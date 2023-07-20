import AWS from "aws-sdk";

const S3 = new AWS.S3({
  signatureVersion: "v4",
  region: AWS_S3_REGION,
  accessKeyId: AWS_ACCESS_KEY, // YOUR AWS ACCESS KEY
  secretAccessKey: AWS_SECRET_ACCESS_KEY, // YOUR AWS SECRET ACCESS KEY
});

export default S3;
