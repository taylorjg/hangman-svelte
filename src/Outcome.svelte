<script>
  import * as C from './constants'
  export let outcome
</script>

{#if outcome === C.OUTCOMES.WON}
  <div>You won :)</div>
{:else}
  <div>You lost :(</div>
{/if}
