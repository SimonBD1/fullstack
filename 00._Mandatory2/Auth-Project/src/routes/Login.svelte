<script>
  import { navigate } from 'svelte-routing';
  import toastr from 'toastr';

  let username = '';
  let password = '';

  async function login() {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/protected');
      toastr.success('Logged in successfully!');
    } else {
      const error = await response.json();
      toastr.error(`Login failed: ${error.message}`);
    }
  }
</script>

<form on:submit|preventDefault={login}>
  <input type="text" placeholder="Username" bind:value={username} required>
  <input type="password" placeholder="Password" bind:value={password} required>
  <button type="submit">Login</button>
</form>
