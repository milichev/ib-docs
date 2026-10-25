[source](https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/family-codes/receive-family-codes)

# Receive Family Codes

#### EWrapper.familyCodes(

**familyCodes:** FamilyCodes\[]. Unique family codes array of accountIds.

)

Returns array of family codes.

#### Python

```python
def familyCodes(self, familyCodes: ListOfFamilyCode):
    print("Family Codes:", familyCode)
```

#### Java

```java
@Override
public void familyCodes(FamilyCode[] familyCodes) {
    System.out.print(EWrapperMsgGenerator.familyCodes(familyCodes));
}
```

#### C++

```cpp
void TestCppClient::familyCodes(const std::vector<FamilyCode> &familyCodes) {
    printf("Family codes (%lu):\n", familyCodes.size());
    for (unsigned int i = 0; i < familyCodes.size(); i++) {
        printf("Family code [%d] - accountID: %s familyCodeStr: %s\n", i, familyCodes[i].accountID.c_str(), familyCodes[i].familyCodeStr.c_str());
    }
}
```

#### C#

```csharp
public void familyCodes(FamilyCode[] familyCodes)
{
  Console.WriteLine("Family Codes:");
  foreach (var familyCode in familyCodes)
  {
    Console.WriteLine("Account ID: {0}, Family Code Str: {1}", familyCode.AccountID, familyCode.FamilyCodeStr);
  }
}
```

#### VB.NET

```vbnet
Public Sub familyCodes(familyCodes As FamilyCode()) Implements EWrapper.familyCodes
  Console.WriteLine("Family Codes:")
  For Each familyCode In familyCodes
    Console.WriteLine("Account ID: " & familyCode.AccountID & " Family Code Str: " & familyCode.FamilyCodeStr)
  Next
End Sub
```
