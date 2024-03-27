<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { tweened } from 'svelte/motion';

	let styles = tweened(0);
	let div: HTMLDivElement;

	beforeNavigate(() => {
		div.style.visibility = 'visible';
		styles.set(45);
	});

	afterNavigate(() => {
		styles.set(100);

		setTimeout(() => {
			div.style.visibility = 'hidden';
			styles.set(0);
		}, 500);
	});
</script>

<div
	class="absolute top-0 left-0 bg-primary-light dark:bg-primary-dark h-1 z-50"
	style="width: {$styles}%;"
	bind:this={div}
/>
