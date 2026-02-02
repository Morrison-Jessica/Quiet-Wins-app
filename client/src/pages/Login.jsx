function Login() {
    const submit = async (e) => {
      e.preventDefault(); 
      // Prevent page reload
  
      const form = new FormData(e.target);
      // Collect form inputs
  
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
  
      if (res.ok) {
        // Store fake auth flag
        localStorage.setItem("auth", "true");
        alert("Logged in");
      }
    };
  
    return (
      <form onSubmit={submit}>
        <input name="email" />
        <input name="password" />
        <button>Login</button>
      </form>
    );
  }
  
  export default Login;
  