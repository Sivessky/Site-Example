function register() {

  //Копия кода, комментарии даны в скрипте в аналогичном HTML файле
  //Copy of the code, comments are given in the script in a similar HTML file
  
   if (document.getElementById("loginText").value == "") {

     console.log("Login field is empty")
     document.getElementsByClassName("loginText")[0].style = "border: 2px solid red"

     
   } else if (document.getElementById("passText").value == "") {

     console.log("First password field is empty")
     document.getElementsByClassName("passText")[0].style = "border: 2px solid red"
     
     
   } else if (document.getElementById("passText1").value == "") {

     console.log("Second password field is empty")
     document.getElementsByClassName("passText1")[0].style = "border: 2px solid red"
     
   } else if (document.getElementById("mailText").value == "") {
     console.log("EMail field is empty")
     document.getElementsByClassName("mailText")[0].style = "border: 2px solid red"
     
   } else if (document.getElementById("loginText").value.includes("*") ||
             document.getElementById("loginText").value.includes("&") ||
             document.getElementById("loginText").value.includes("%") ||
             document.getElementById("loginText").value.includes("$") ||
             document.getElementById("loginText").value.includes("£") ||
             document.getElementById("loginText").value.includes("”")) {

     console.log("Login contains some of: * & % $ £ ” ")
     document.getElementsByClassName("loginText")[0].style = "border: 2px solid red"

   } else if (document.getElementById("passText").value.length < 5) {

     console.log("Password field contains less than 5 characters")
     document.getElementsByClassName("passText")[0].style = "border: 2px solid red"  

   } else if (document.getElementById("passText").value.includes(" ")) {

     console.log("Password field contain space")
     document.getElementsByClassName("passText")[0].style = "border: 2px solid red"  

   } else if (document.getElementById("passText").value !== document.getElementById("passText1").value) {

     console.log("Passwords mismatch")
     document.getElementsByClassName("passText")[0].style = "border: 2px solid red"
     document.getElementsByClassName("passText1")[0].style = "border: 2px solid red"

   } else {

     console.log("All rules are met!")
     
     window.location.assign = '../index.html';

   }
}
