<script lang="ts">
	import { createLabel, melt } from '@melt-ui/svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = HTMLInputAttributes & {
		label?: string;
		id?: string;
	};

	export let label: string = '';
	export let id: string = '';

	const {
		elements: { root }
	} = createLabel();
</script>

<div
	class="relative w-full field before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 before:bg-gray-500 before:rounded-full after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-white after:rounded-full after:scale-x-0 focus-within:after:scale-x-100 after:duration-300"
>
	<input
		class="bg-transparent outline-none p-2 text-xl font-light w-full"
		{...$$restProps}
		required={true}
		{id}
	/>
	<label
		class="absolute p-2 left-0 text-xl font-light pointer-events-none duration-200 text-gray-300"
		use:melt={$root}
		for={id}>{label}</label
	>
</div>
