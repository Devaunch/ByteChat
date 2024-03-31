<script lang="ts">
	import VisuallyHidden from '$components/VisuallyHidden.svelte';
	import { createSelect, melt } from '@melt-ui/svelte';
	import Check from 'lucide-svelte/icons/check';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { fade } from 'svelte/transition';

	type $$Props = HTMLInputAttributes & {
		options: string[];
		label: string;
		defaultOption: string;
	};

	export let options: string[];
	let selectLabel: string;
	export { selectLabel as label };
	export let defaultOption: string;

	const {
		elements: { trigger, menu, option, label },
		states: { selectedLabel, open },
		helpers: { isSelected }
	} = createSelect<string>({
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true
		},
		defaultSelected: {
			value: defaultOption
		}
	});

	const id = 'select-field-' + crypto.randomUUID().toString();
</script>

<div class="flex flex-col w-full relative" {id}>
	<VisuallyHidden>
		<input type="text" {...$$restProps} bind:value={$selectedLabel} />
	</VisuallyHidden>
	<label
		for={id}
		class="absolute -translate-y-1/2 text-[0.9rem] block text-gray-300 px-2 text-sm"
		use:melt={$label}>{selectLabel}</label
	>
	<button
		class="relative flex items-center justify-between rounded-lg p-2
  text-gray-100 shadow transition-opacity hover:opacity-90 before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 before:bg-gray-600 before:rounded-full after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-white after:rounded-full after:scale-x-0 focus-within:after:scale-x-100 after:duration-300"
		use:melt={$trigger}
		aria-label={selectLabel}
	>
		{$selectedLabel || defaultOption}
		<ChevronDown class="size-7 duration-300 {$open ? 'rotate-180' : ''}" />
	</button>
	{#if $open}
		<div
			class="z-10 flex max-h-60 flex-col
    overflow-y-auto rounded-lg focus:!ring-0 bg-black shadow-xl"
			use:melt={$menu}
			transition:fade={{ duration: 150 }}
		>
			{#each options as _option}
				<div
					class="relative cursor-pointer rounded-lg py-2 pl-8 pr-4 text-slate-200
              hover:bg-gray-700 focus:z-10
              data-[highlighted]:bg-gray-700
              data-[disabled]:opacity-50"
					use:melt={$option({ value: _option, label: _option })}
				>
					<div class="check {$isSelected(_option) ? 'block' : 'hidden'}">
						<Check class="size-4" />
					</div>

					{_option}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.check {
		position: absolute;
		left: theme(spacing.2);
		top: 50%;
		z-index: theme(zIndex.20);
		translate: 0 calc(-50% + 1px);
	}
</style>
