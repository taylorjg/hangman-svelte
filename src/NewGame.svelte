<script>
  export let onNewGame
</script>

<button class='btn btn-primary btn-sm new-game' on:click={onNewGame}>
  New Game
</button>

<style>
  .new-game {
    margin-top: 1em;
  }
</style>
