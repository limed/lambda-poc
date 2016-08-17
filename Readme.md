### lambda-test

Test out lambda function, this is a lambda function that queries and returns its IP. This needs to be attached to a VPC to work.

Since we block all outbound connection and force everything through a proxy server we need to pass it a proxy server in its payload.


Example:
```json
{
    "proxy": "http://proxy.stage.us-west-2.nubis-lab.nubis.allizom.org:3128"
}
```
