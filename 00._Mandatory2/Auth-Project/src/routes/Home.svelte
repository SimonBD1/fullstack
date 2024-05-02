<script>
    import { Link } from 'svelte-routing';
  </script>
  
  <div>
    <h1>Welcome to our little Authentication System</h1>
    <p>Please choose an option:</p>
    <ul>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
    </ul>
  </div>
  