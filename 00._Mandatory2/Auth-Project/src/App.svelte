<script>
  import { Router, Route, navigate } from 'svelte-routing';
  import Home from './routes/Home.svelte';
  import Login from './routes/Login.svelte';
  import Register from './routes/Register.svelte';
  import Protected from './routes/Protected.svelte';
  import { checkSession } from './lib/session';

  async function protect({ detail }) {
    const isLoggedIn = await checkSession();
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    } else {
    return Protected;
  }
  }
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/protected" component="{protect}" />
</Router>
