<script>
  import { navigate } from 'svelte-routing';
  import toastr from 'toastr';

  let username = '';
  let password = '';

  async function register() {
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        toastr.success('Registration successful! Please login.');
        navigate('/login');
      } else {
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          toastr.error(`Registration failed: ${data.error ? data.error : text}`);
        } catch (error) {
          toastr.error(`Registration failed: ${text}`);
        }
      }
    } catch (error) {
      console.error('Failed to register', error);
      toastr.error('Registration failed unexpectedly. Please check your network.');
    }
  }
</script>

<form on:submit|preventDefault={register}>
  <h2>Register</h2>
  <div>
    <label for="username">Username:</label>
    <input type="email" id="username" bind:value={username} required>
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required>
  </div>
  <button type="submit">Register</button>
</form>
