<script>
  export let onNewGame
  const focus = element => element.focus()
</script>

<button
  class='btn btn-primary btn-sm new-game'
  on:click={onNewGame}
  use:focus
>
  New Game
</button>

<style>
  .new-game {
    margin-top: 1em;
  }
</style>
