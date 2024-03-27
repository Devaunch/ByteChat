<script lang="ts">
	const rows = new Array(80).fill(1);
	const cols = new Array(75).fill(1);
	let initialColor = 'rgba(0,0,0,0)';

	let colors = [
		'--sky-300',
		'--pink-300',
		'--green-300',
		'--yellow-300',
		'--red-300',
		'--purple-300',
		'--blue-300',
		'--indigo-300',
		'--violet-300'
	];

	const getRandomColor = () => {
		return colors[Math.floor(Math.random() * colors.length)];
	};

	const whileHover = (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		e.currentTarget.style.transition = '0s';
		e.currentTarget.style.backgroundColor = `var(${getRandomColor()})`;
	};

	const afterHover = (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		e.currentTarget.style.transition = '2s';
		e.currentTarget.style.backgroundColor = initialColor;
	};
</script>

<div
	style="transform: translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0);"
	class="absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full"
>
	{#each rows as _, i ('row' + i)}
		<div class="w-16 h-8 border-l border-slate-700 relative">
			{#each cols as _, j ('col' + j)}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:mouseenter={whileHover}
					on:mouseleave={afterHover}
					class="w-16 h-8 border-r border-t border-slate-700 relative"
				>
					{#if j % 2 === 0 && i % 2 === 0}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6v12m6-6H6"
							/>
						</svg>
					{/if}
				</div>
			{/each}
		</div>
	{/each}
</div>
