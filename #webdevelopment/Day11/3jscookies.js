//cookies are small strings of data stored directly in the browser

//console.log(document.cookie) displays all cookies in any page of browser


//document.cookie = "name = value" to set any cookie that will add that cookie 

// document.cookie = `${encodeURIComponent(name)} = ${encodeURIComponent(value)}` to set cookie containing special characters
// do decodeURIComponent() later to decode 

//
//cookie options

// if you write something like this

//document.cookie = "user=john; path = /home; expires = date"
// the other ones are options used to set other value of cookie

