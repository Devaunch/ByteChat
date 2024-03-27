<script lang="ts">
	import { getUserRegion } from '$utils/calendar';
	import { CalendarDate } from '@internationalized/date';
	import { createDatePicker, melt } from '@melt-ui/svelte';
	import Calendar from 'lucide-svelte/icons/calendar';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import { fade } from 'svelte/transition';

	let calendarLabel = 'Date';
	export { calendarLabel as label };
	export let defaultDate: CalendarDate = new CalendarDate(2024, 1, 1);

	const {
		elements: {
			calendar,
			cell,
			content,
			grid,
			heading,
			label,
			nextButton,
			prevButton,
			segment,
			trigger,
			field
		},
		states: { months, headingValue, weekdays, segmentContents, open },
		helpers: { isDateDisabled, isDateUnavailable },
		options: { locale }
	} = createDatePicker({
		forceVisible: true,
		defaultValue: defaultDate
	});

	const region = getUserRegion();

	$: region ? locale.set(region) : null;
</script>

<section>
	<div
		class="w-full relative before:absolute before:w-full before:h-0.5 before:-bottom-2 before:left-0 before:bg-gray-500 before:rounded-full after:absolute after:w-full after:h-0.5 after:-bottom-2 after:left-0 after:bg-white after:rounded-full after:scale-x-0 {$open
			? 'after:scale-x-100'
			: ''} after:duration-300"
	>
		<span use:melt={$label} class="px-2 text-white text-sm">{calendarLabel}</span>
		<div use:melt={$field} use:melt={$trigger}>
			{#key $locale}
				{#each $segmentContents as seg}
					<div use:melt={$segment(seg.part)}>
						{seg.value}
					</div>
				{/each}
			{/key}
			<div>
				<Calendar class="size-6" />
			</div>
		</div>
	</div>
	{#if $open}
		<div transition:fade={{ duration: 100 }} use:melt={$content}>
			<div use:melt={$calendar}>
				<header>
					<button use:melt={$prevButton}>
						<ChevronLeft size={24} />
					</button>
					<div use:melt={$heading}>
						{$headingValue}
					</div>
					<button use:melt={$nextButton}>
						<ChevronRight size={24} />
					</button>
				</header>
				<div>
					{#each $months as month}
						<table use:melt={$grid}>
							<thead aria-hidden="true">
								<tr>
									{#each $weekdays as day}
										<th>
											<div>
												{day}
											</div>
										</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each month.weeks as weekDates}
									<tr>
										{#each weekDates as date}
											<td
												role="gridcell"
												aria-disabled={$isDateDisabled(date) ||
													$isDateUnavailable(date)}
											>
												<div use:melt={$cell(date, month.value)}>
													{date.day}
												</div>
											</td>
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</section>

<style lang="postcss">
	section {
		@apply flex w-full flex-col items-center gap-3;
	}

	[data-melt-datefield-field] div:last-of-type {
		@apply flex w-full items-center justify-end;
	}

	[data-melt-popover-content] {
		@apply z-10 min-w-[320px] rounded-lg bg-black shadow-sm border-slate-800 border-2;
	}

	[data-melt-popover-trigger] {
		@apply p-2 text-white;
	}

	[data-melt-datefield-label] {
		@apply select-none font-medium text-dark;
	}

	[data-melt-datefield-label][data-invalid] {
		@apply text-red-500;
	}

	[data-melt-datefield-field] {
		@apply flex w-full items-center;
	}

	[data-melt-datefield-field][data-invalid] {
		@apply border-red-400;
	}

	[data-melt-datefield-segment][data-invalid] {
		@apply text-red-500;
	}

	[data-melt-datefield-segment]:not([data-segment='literal']) {
		@apply px-0.5;
	}

	[data-melt-datefield-validation] {
		@apply self-start text-red-500;
	}

	[data-melt-calendar] {
		@apply w-full rounded-lg bg-black p-3 shadow-sm;
	}

	header {
		@apply flex items-center justify-between pb-2;
	}

	header + div {
		@apply flex items-center gap-6;
	}

	[data-melt-calendar-prevbutton] {
		@apply rounded-lg p-1 transition-all hover:bg-slate-800;
	}

	[data-melt-calendar-nextbutton] {
		@apply rounded-lg p-1 transition-all hover:bg-slate-800;
	}

	[data-melt-calendar-prevbutton][data-disabled] {
		@apply pointer-events-none rounded-lg p-1 opacity-40;
	}

	[data-melt-calendar-nextbutton][data-disabled] {
		@apply pointer-events-none rounded-lg p-1 opacity-40;
	}

	[data-melt-calendar-heading] {
		@apply font-semibold;
	}

	th {
		@apply text-sm font-semibold;
	}

	th div {
		@apply flex h-6 w-6 items-center justify-center p-4;
	}

	[data-melt-calendar-grid] {
		@apply w-full;
	}

	[data-melt-calendar-cell] {
		@apply flex h-6 w-6 cursor-pointer select-none items-center justify-center rounded-lg p-4 hover:bg-slate-800;
	}

	[data-melt-calendar-cell][data-disabled] {
		@apply pointer-events-none opacity-40;
	}
	[data-melt-calendar-cell][data-unavailable] {
		@apply pointer-events-none text-red-400 line-through;
	}

	[data-melt-calendar-cell][data-selected] {
		@apply bg-slate-700 text-dark;
	}

	[data-melt-calendar-cell][data-outside-visible-months] {
		@apply pointer-events-none cursor-default opacity-40 hover:bg-transparent;
	}

	[data-melt-calendar-cell][data-outside-month] {
		@apply pointer-events-none cursor-default opacity-0 hover:bg-transparent;
	}
</style>
