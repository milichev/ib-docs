[source](https://www.interactivebrokers.com/docs/tws-api/doc/news/news-providers/receive-news-providers)

# Receive News Providers

#### EWrapper.newsProviders (

**newsProviders:** NewsProviders\[]. Unique array containing all available news sources.\
)

Returns array of subscribed API news providers for this user

#### Python

```python
def newsProviders(self, newsProviders: ListOfNewsProviders):
	print("NewsProviders: ", newsProviders)
```

#### Java

```java
@Override
public void newsProviders(NewsProvider[] newsProviders) {
	System.out.print(EWrapperMsgGenerator.newsProviders(newsProviders));
}
```

#### C++

```cpp
void TestCppClient::newsProviders(const std::vector &newsProviders) {
    printf("News providers (%lu):\n", newsProviders.size());
    for (unsigned int i = 0; i < newsProviders.size(); i++) {
        printf("News provider [%d] - providerCode: %s providerName: %s\n", i, newsProviders[i].providerCode.c_str(), newsProviders[i].providerName.c_str());
    }
}
```

#### C#

```csharp
public void newsProviders(NewsProvider[] newsProviders)
{
	Console.WriteLine("News Providers:");
	foreach (var newsProvider in newsProviders)
	{
		Console.WriteLine("News provider: providerCode - {0}, providerName - {1}",
			newsProvider.ProviderCode, newsProvider.ProviderName);
	}
}
```

#### VB.NET

```vbnet
Public Sub newsProviders(newsProviders As NewsProvider()) Implements EWrapper.newsProviders
  Console.WriteLine("News Providers")
  For Each newsProvider In newsProviders
    Console.WriteLine("News Provider: providerCode - " & newsProvider.ProviderCode & ", providerName - " & newsProvider.ProviderName)
  Next
End Sub
```
