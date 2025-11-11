const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const age = document.getElementById('age').value.trim(); 
  const password = document.getElementById('password').value.trim();


  if (!username || !age || !password) {
    alert("Please fill in all fields"); //validate before sending
    return;
  }

  if (isNaN(age) || age <= 0) {
    alert("Please enter a valid age");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, age })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registration successful!");
      window.location.href = "login.html";
    } else {
      alert(data.msg || "Registration failed");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    alert("An error occurred during registration");
  }
});