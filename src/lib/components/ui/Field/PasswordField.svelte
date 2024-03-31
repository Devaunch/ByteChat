<script lang="ts">
	import { createLabel, melt } from '@melt-ui/svelte';
	import Eye from 'lucide-svelte/icons/eye';
	import EyeOff from 'lucide-svelte/icons/eye-off';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { scale, slide } from 'svelte/transition';
	import * as v from 'valibot';

	type $$Props = HTMLInputAttributes & {
		label?: string;
		validator?: any;
	};

	export let label: string = '';
	export let validator: any = null;

	let show = false;
	let isValid = true;
	let value: string = '';
	let errorMessage = '';

	const {
		elements: { root }
	} = createLabel();

	$: if (validator && value.length > 0) {
		const r = v.safeParse(validator, value);
		errorMessage = r.issues ? r.issues[0].message : '';
		isValid = r.success;
	} else {
		isValid = true;
	}

	const handleInput = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		value = e.currentTarget.value;
	};

	const id = 'password-field-' + crypto.randomUUID().toString();
</script>

<div
	class="relative w-full field before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 before:bg-gray-600 before:rounded-full after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:rounded-full after:scale-x-0 focus-within:after:scale-x-100 after:duration-300 {isValid
		? 'after:bg-white'
		: 'after:bg-red-500'}"
>
	<input
		class="bg-transparent outline-none p-2 text-xl font-light w-full {isValid
			? 'text-gray-100'
			: '!text-red-500'}"
		required={true}
		type={show ? 'text' : 'password'}
		{id}
		{...$$restProps}
		on:input={handleInput}
	/>
	<label
		class="absolute p-2 left-0 text-xl font-light pointer-events-none duration-200 {isValid
			? 'text-gray-300'
			: 'text-red-500'}"
		use:melt={$root}
		for={id}
	>
		{label}
		<span class="text-red-500">*</span>
	</label>
	{#if !isValid}
		<div
			class="absolute top-full left-0 text-red-500 text-sm font-normal p-2 tracking-tighter"
			transition:slide={{ duration: 300 }}
		>
			{errorMessage}
		</div>
	{/if}
	<button
		class="absolute top-1/2 right-0 -translate-y-1/2 text-gray-300 hover:text-white duration-300 cursor-pointer size-10"
		on:click={() => (show = !show)}
		type="button"
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
