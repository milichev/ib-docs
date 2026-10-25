[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/news-articles/receive-news-articles)

# Receive News Articles

#### EWrapper.newsArticle (

**requestId:** int. Request identifier used to track data.

**articleType:** int. The type of news article (0 – plain text or html, 1 – binary data / pdf).

**articleText:** String. The body of article (if articleType == 1, the binary data is encoded using the Base64 scheme).\
)

Called when receiving a News Article in response to reqNewsArticle().

#### Python

```python
def newsArticle(self, requestId: int, articleType: int, articleText: str):
  print("requestId: ", requestId, "articleType: ", articleType, "articleText: ", articleText)
```

#### Java

```java
@Override
public void newsArticle(int requestId, int articleType, str articleText) {
  System.out.print(EWrapperMsgGenerator.newsArticle(requestId, articleType, articleText));
}
```

#### C++

```cpp
void TestCppClient::newsArticle(int requestId, int articleType, const std::string& articleText) {
    printf("newsArticle.", requestId, articleType, articleText);
}
```

#### C#

```csharp
public void newsArticle(int requestId, int articleType, string articleText)
{
  Console.WriteLine("newsArticle. Request Id: {0}, Article Type: {1}, Article Text: {2}", requestId, articleType, articleText);
}
```

#### VB.NET

```vbnet
Public Sub newsArticle(requestId As Integer, articleType As Integer, articleText As String) Implements IBApi.EWrapper.newsArticle
  Console.WriteLine("newsArticle. Request Id: " & requestId & ", Article Type: " & articleType & ", Article Text: " & articleText)
End Sub
```
