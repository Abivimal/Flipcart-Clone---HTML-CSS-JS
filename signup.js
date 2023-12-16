let getUserdata = JSON.parse(localStorage.getItem("usersdata")) || []
console.log(getUserdata)
function Signup() {
  let mobile = document.getElementById("mobile").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("pass").value;

  console.log(getUserdata)
  if (mobile.length == 0) {
    alert("Enter Your Mobile Number")
  }
  else if (mobile.length < 10) {
    alert("Mobile Number should have atleast 10 digits")
  }
  else if (name == "" || name == null) {
    alert("Enter Your Name");
  }
  else if (password == null) {
    alert("Enter Your Password");
  }
  else if (password.length < 8) {
    alert("Password must should have 8 characters");
  }
  else {
    let userdata = {
      username: name,
      mobile: mobile,
      password: password
    }
    let users = []
    users.push(userdata)

    localStorage.setItem("usersdata", JSON.stringify(users));
    alert("Signup Successful");
    window.location.href="index.html";
  }
}