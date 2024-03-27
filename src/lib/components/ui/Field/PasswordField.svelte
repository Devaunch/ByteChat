<script lang="ts">
	import { createLabel, melt } from '@melt-ui/svelte';
	import Eye from 'lucide-svelte/icons/eye';
	import EyeOff from 'lucide-svelte/icons/eye-off';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { scale } from 'svelte/transition';

	type $$Props = HTMLInputAttributes & {
		label?: string;
		id?: string;
	};

	export let label: string = '';
	export let id: string = '';

	let show = false;

	const {
		elements: { root }
	} = createLabel();
</script>

<div
	class="relative w-full field before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 before:bg-gray-500 before:rounded-full after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-white after:rounded-full after:scale-x-0 focus-within:after:scale-x-100 after:duration-300"
>
	<input
		class="bg-transparent outline-none p-2 text-xl font-light w-full"
		required={true}
		type={show ? 'text' : 'password'}
		{id}
		{...$$restProps}
	/>
	<label
		class="absolute p-2 left-0 text-xl font-light pointer-events-none duration-200 text-gray-300"
		use:melt={$root}
		for={id}>{label}</label
	>
	<button
		class="absolute top-1/2 right-0 -translate-y-1/2 text-gray-300 hover:text-white duration-300 cursor-pointer size-10"
		on:click={() => (show = !show)}
	>
		{#if show}
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-6"
				transition:scale={{ duration: 300 }}
			>
				<EyeOff class="size-6" />
			</div>
		{:else}
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-6"
				transition:scale={{ duration: 300 }}
			>
				<Eye class="size-6" />
			</div>
		{/if}
	</button>
</div>
