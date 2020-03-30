<script>
  export let errorMessage
  export let onClose
</script>

<div id='error-panel' class='alert alert-danger' role='alert'>
  <button type='button' class='close' aria-label='Close'>
    <span on:click={onClose} aria-hidden='true'>&times;</span>
  </button>
  <span class='error-panel-text'>{errorMessage}</span>
</div>

<style>
  #error-panel {
    position: fixed;
    z-index: 2;
    max-width: calc(100% - 40px);
    overflow-wrap: break-word;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }

  #error-panel .close {
    margin-left: 10px;
    border: none;
    outline: none;
  }
</style>
