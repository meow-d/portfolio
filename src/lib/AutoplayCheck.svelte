<script>
    import canAutoplay from "can-autoplay";
    import { onMount } from "svelte";

    let autoplayAllowed = true;
    let monitor;

    async function checkAutoplay() {
        const { result } = await canAutoplay.audio();
        autoplayAllowed = result;

        if (autoplayAllowed) {
            stopMonitor();
        }
    }

    function startMonitor() {
        monitor = setInterval(checkAutoplay, 1000);
    }

    function stopMonitor() {
        clearInterval(monitor);
        monitor = null;
    }

    onMount(async () => {
        startMonitor();
    });
</script>

{#if !autoplayAllowed}
    <div id="autoplay-check">
        <p>
            <i class="fa-solid fa-volume-xmark"></i>
            your browser doesn't allow audio to play without user interaction.
        </p>
        <p>click anywhere on the screen to get rid of this.</p>
    </div>
{/if}

<style>
    p {
        color: white;
    }

    #autoplay-check {
        float: right;
        position: fixed;
        top: 0;
        right: 0;
        margin: 2rem;
        text-align: right;
    }
</style>
