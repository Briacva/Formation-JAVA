// Write a pattern that matches e-mail addresses. Go to the editor
// The personal information part contains the following ASCII characters.

// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other

// Solution officielle

function valid_email(str)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test(str))
{  
return "Valid email address!";  
}  
else  
{  
return "You have entered an invalid email address!";  
}
}

valid_email('me-info@example.com');