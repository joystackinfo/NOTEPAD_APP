// Register User
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('registerUsername').value.trim();
  const password = document.getElementById('registerPassword').value.trim();

  try {
    const res = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registration successful!");
      window.location.href = "login.html";
    } else {
      alert(data.msg || "Registration failed");
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred during registration");
  }
});