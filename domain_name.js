
// PSEUDO CODE 
  // Regex Versions
    // \.{1}\w{3}$ => will get the .com or .org captured
    // (\w+)\.{1}\w{3}$ => gets me closer this gets the whole end of the line...
    // /(\w+)(?=\.{1}\w{3}$)/i => captures the group followed by a . followed by three more letters followed by the end of the line.
    // /(https?\:\/\/)/ => captures the http:// or https://
    // /(\.\w{2}\.\w{2}$)/i  => match a . followed by 2 letters followed by . followed by 2 letters followed by the end of the string.

  // Failed document.createElement() attempt.  
    // This trick will clear out everything before the hostname. However, creating an issue returning the host name of the window it's running in (i.e. 'replbox.repl.it') instead of the provided url to the function.

    // var element = document.createElement('a');
    // element.href = url;
    // host and hostname return the same.
    // console.log(element.hostname); // returns google.com or google.co.jp

  // Attempt again using .match, .replace, and .split


// CODE

function domainName(url){
  // replaces the http://www. or https://www.
  var host_name = url.replace(/(https?\:\/\/)?(www\.)?/i, '');

  // replace anything after a #, ? or /
  host_name = host_name.split('/')[0];
  host_name = host_name.split('?')[0];
  host_name = host_name.split('#')[0];

  // remove the .com or .name, .camera, .land, etc. in the case this now ends the host name
  host_name = host_name.replace(/(\.\w{3,}$)/i, '')
 
  // Left with host names and host names with country codes.  Look at names that still have more than one period and remove the country codes.
  if ( host_name.split('.').length > 2 ) {
    let arrLen = host_name.split('.').length
    if ( host_name.split('.')[arrLen-2].length == 2 && host_name.split('.')[arrLen-1].length ==2 ) {
      host_name = host_name.replace(/(\.\w{2}\.\w{2}$)/i, '');
    }
  }

  // in the case there is a country, but no .co first...
  host_name = host_name.replace(/(\.\w{2}$)/i, '')

  console.log(host_name);

  return host_name;
}


// DRIVER TEST CODE

domainName("https://google.com"); // should return "google"

domainName("http://youtube.com"); // should return "youtube"

domainName("www.hackernews.com"); // should return "hackernews"

domainName("underdogrescuemn.com");  // should return "underdogrescuemn"

domainName("mn.gov");

domainName("http://google.co.jp");

domainName("www.google.co.ir");

domainName("mywords.google.co.ir");

domainName("http://google.co.uk#about");

domainName("https://www.google.com/?=skool");

domainName("http://www.google.net/this_dog");

domainName("xandu.ru");