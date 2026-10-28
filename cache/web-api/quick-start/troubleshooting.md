> This page is for Web API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Troubleshooting

## SSL Error - Self Signed Certificate

This occurs because the API gateway does not come bundled with a valid certificate.
For information on how to generate and install a valid gateway certificate, please see the following [article](https://www.sslshopper.com/article-how-to-create-a-self-signed-certificate-using-java-keytool.html).

## 401 Error

Make sure you log in to the API gateway. The steps to do so can be found [here](/docs/web-api/api/web-api/initializing-brokerage-session).

If you have already logged in and are still getting this error, you may need to initialize a brokerage session. If you have already initialized a brokerage session, your session may have expired. To prevent this, [ping](/docs/web-api/v1/endpoints/session/ping-the-server) the server periodically.