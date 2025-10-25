function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }

  if (password.toLowerCase().includes("password")) {
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    return false;
  }

  return true;
}

document.getElementById("loginBtn").addEventListener("click", function() {
  const password = document.getElementById("password").value;

  if (isStrongPassword(password)) {
    alert("password is strong");
  } else {
    alert("password is weak");
  }
});

