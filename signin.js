let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || []
console.log(getUsersdata);
function Signin() {
  let mobile = document.getElementById("mobile").value;
  let password = document.getElementById("pass").value;

  if (mobile.length == 0) {
    alert("Enter Your Mobile Number")
  }
  else if (mobile.length < 10) {
    alert("Mobile Number should have atleast 10 digits")
  }
  let count = 0
  for (let i = 0; i < getUsersdata.length; i++) {
    if (mobile == getUsersdata[i].mobile) {
      if (password == getUsersdata[i].password) {
        alert("Signin Successful")
        window.location.href = "index.html"
      }
      else{
        count++
      }
    }
  
  if(count == getUsersdata.length) {
    alert("User is not registered, Signup to Continue");
    window.location.href = "signup.html"
  }
}
}