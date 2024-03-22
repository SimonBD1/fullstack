<script>
  export let numberOfFriends = 0;
  function getAFriend() {
    numberOfFriends++;
  }
  function deleteAFriend() {
    if (numberOfFriends > 0) {
      numberOfFriends--;
    }
  }
</script>

<h1>Number of friends = {numberOfFriends}</h1>
<button on:click={getAFriend}>Get a Friend</button>
<button on:click={deleteAFriend}>Delte a Friend</button>
