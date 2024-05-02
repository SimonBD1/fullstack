<script>
  import { navigate } from 'svelte-routing';
  import toastr from 'toastr';

  function logout() {
    localStorage.removeItem('isLoggedIn');
    toastr.info('Logged out successfully!');
    navigate('/login');
  }
</script>

<nav>
  <button class="button is-light" on:click={logout}>Logout</button>
</nav>

<h1>Protected Page</h1>
<p>This is a protected page. You should only see this if you are logged in.</p>
