
 const users = JSON.parse(localStorage.getItem('users')) || [];

    function validate() {
      const enteredUsername = document.getElementById('username').value;
      const enteredPassword = document.getElementById('password').value;

      const isValidUser = users.some(user => user.username === enteredUsername && user.password === enteredPassword);

      if (isValidUser) {
        window.location.href = "web2.html";
      } else {
        alert('Not Registered');
      }
    }

    function register() {
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const registerPassword = document.getElementById('registerPassword').value;

      users.push({ username: fullName, password: registerPassword });
      localStorage.setItem('users', JSON.stringify(users));

      showLoginForm();
    }

    function showRegisterForm() {
      document.getElementById("registrationForm").style.display = "block";
      document.querySelector("form").style.display = "none";
    }

    function showLoginForm() {
      document.getElementById("registrationForm").style.display = "none";
      document.querySelector("form").style.display = "block";
    }
