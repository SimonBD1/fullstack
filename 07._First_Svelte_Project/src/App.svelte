<script>
  import Greeter from "./components/Greeter/Greeter.svelte";
  import FriendsCounter from "./components/FriendsCounter/FriendsCounter.svelte"
</script>
<main>
  <Greeter name="Lars"></Greeter>
  <FriendsCounter numberOfFriends={5}></FriendsCounter>
</main>