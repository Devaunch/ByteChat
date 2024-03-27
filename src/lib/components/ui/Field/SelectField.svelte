<script lang="ts">
	import { createSelect, melt } from '@melt-ui/svelte';
	import Check from 'lucide-svelte/icons/check';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { fade } from 'svelte/transition';

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
			fitViewport: true,
			sameWidth: true
		},
		defaultSelected: {
			value: defaultOption
		}
	});
</script>

<div class="flex flex-col w-full">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="block text-white px-2 text-sm" use:melt={$label}>{selectLabel}</label>
	<button
		class="relative flex items-center justify-between rounded-lg p-2
  text-dark shadow transition-opacity hover:opacity-90 before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 before:bg-gray-500 before:rounded-full after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-white after:rounded-full after:scale-x-0 focus-within:after:scale-x-100 after:duration-300"
		use:melt={$trigger}
		aria-label={selectLabel}
	>
		{$selectedLabel || defaultOption}
		<ChevronDown class="size-7" />
	</button>
	{#if $open}
		<div
			class="z-10 flex max-h-60 flex-col
    overflow-y-auto rounded-lg
    shadow focus:!ring-0 bg-black border-2 border-slate-800"
			use:melt={$menu}
			transition:fade={{ duration: 150 }}
		>
			{#each options as _option}
				<div
					class="relative cursor-pointer rounded-lg py-2 pl-8 pr-4 text-slate-100
              hover:bg-slate-900 focus:z-10
              data-[highlighted]:bg-slate-800
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
