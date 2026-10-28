[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/white-branding-user-info/receiving-white-branding-info)

# Receiving White Branding Info

#### EWrapper.userInfo (

**reqId:** int. Identifier for the given request.

**whiteBrandingId:** String. Identifier for the white branded entity.\
)

#### Java

```java
@Override
public void userInfo(int reqId, String whiteBrandingId) {
	System.out.println(EWrapperMsgGenerator.userInfo(reqId, whiteBrandingId));
}
```
