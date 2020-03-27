<script>
  import * as C from './constants'
  export let outcome
</script>

{#if outcome === C.OUTCOMES.WON}
  <div>WON</div>
{:else}
  <div>LOST</div>
{/if}
