[source](https://www.interactivebrokers.com/docs/web-api/quick-start/troubleshooting)

# Troubleshooting

## SSL Error - Self Signed Certificate

This occurs because the API gateway does not come bundled with a valid certificate.
For information on how to generate and install a valid gateway certificate, please see the following [article](https://www.sslshopper.com/article-how-to-create-a-self-signed-certificate-using-java-keytool.html).

## 401 Error

Make sure you log in to the API gateway. The steps to do so can be found [here](../api/web-api/initializing-brokerage-session.md).

If you have already logged in and are still getting this error, you may need to initialize a brokerage session. If you have already initialized a brokerage session, your session may have expired. To prevent this, [ping](../v1/endpoints/session/ping-the-server.md) the server periodically.
