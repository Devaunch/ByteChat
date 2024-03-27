<script lang="ts">
	// prettier-off
	import '../app.css';
	// prettier-on
	import LoadingBar from '$components/LoadingBar.svelte';
	import 'svelte-ripple-action/ripple.css';
</script>

<LoadingBar />
<slot />
