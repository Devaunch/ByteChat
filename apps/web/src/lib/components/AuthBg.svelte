<script lang="ts">
	import { tweened } from "svelte/motion";

    let mouse = tweened({
        x: 0,
        y: 0
    }, {
        duration: 50,
        delay: 0
    });

    const handleMouseMove = (e: MouseEvent & {
        currentTarget: EventTarget & HTMLDivElement;
    }) => {
        let { left, top } = e.currentTarget.getBoundingClientRect();

        mouse.set({
            x: e.clientX - left,
            y: e.clientY - top
        });
    }
</script>

<div on:mousemove={handleMouseMove} role="presentation" 
    class="relative h-screen w-full flex items-center bg-black justify-center group"
>
    <div class="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none" />
    <div class="pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style="
            mask-image: radial-gradient(
                250px circle at {$mouse.x}px {$mouse.y}px,
                black 0%,
                transparent 100%
            );
        "
    >
        <div class="relative z-20">
            <slot />
        </div>
    </div>
</div>