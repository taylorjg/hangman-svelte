<script>
  import Letter from './Letter.svelte'
  export let letters
  export let onChooseLetter
</script>

<div>
  {#each letters as {letter, mode}}
    <Letter {letter} {mode} {onChooseLetter} />
  {/each}
</div>
