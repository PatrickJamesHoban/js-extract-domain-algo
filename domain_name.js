
// CODE

function domainName(url){

  var regex1 = (\w+)(?=\.{1}\w{3}$)/i;

  return url.match(regex1)[0]  // works, but misses https://google.co.jp  also misses null
  //your code here

  // \.{1}\w{3}$ => will get the .com or .org captured

  // (\w+)\.{1}\w{3}$ => gets me closer this gets the whole end of the line...

  // /(\w+)(?=\.{1}\w{3}$)/i => think this is the one!

  
}


// DRIVER CODE

domainName("https://google.com") // should return "google"

domainName("http://youtube.com") // should return "youtube"

domainName("www.hackernews.com") // should return "hackernews"

domainName("underdogrescuemn.com")  // should return "underdogrescuemn"

domainName("mn.gov")