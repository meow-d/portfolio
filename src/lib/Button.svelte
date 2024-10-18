<script>
    import { onMount } from "svelte";
    import clickAudioPath from "/src/assets/sfx/734218__okularperpendikular__plasticmouseclick.ogg";
    import hoverAudioPath from "/src/assets/sfx/470436__erokia__menu-ui-click-206.wav";
    import { createEventDispatcher } from "svelte";

    export let id = null;
    let buttonElement;

    // handle click event
    const dispatch = createEventDispatcher();
    function handleClick(event) {
        dispatch("click", event);
    }

    // button audio
    // TODO using bind and having this for every button seems like duplicate code...? or not...?
    function addListeners(button) {
        const hoverAudio = new Audio(hoverAudioPath);
        const clickAudio = new Audio(clickAudioPath);
        hoverAudio.volume = 0.1;
        clickAudio.volume = 0.1;

        button.addEventListener(
            "mouseenter",
            function () {
                hoverAudio.currentTime = 0;
                hoverAudio.play();
            },
            false,
        );

        button.addEventListener(
            "click",
            function () {
                clickAudio.currentTime = 0;
                clickAudio.play();
            },
            false,
        );
    }

    onMount(() => addListeners(buttonElement));
</script>

<button {id} bind:this={buttonElement} on:click={handleClick}>
    <slot></slot>
</button>

<style>
    button {
        color: inherit;
        font: inherit;
        cursor: pointer;
        outline: inherit;

        background: var(--item-color);
        border: var(--item-border);
        perspective: 1000px;
        transform-style: preserve-3d;
        transition:
            background 0.1s,
            transform 0.1s ease;

        padding: 1rem;
        border-radius: 10px;
        height: fit-content;

        &:hover {
            background: var(--item-hover-color);
            transform: scale3d(1.05, 1.05, 1.05) rotateY(10deg);
        }

        &:active {
            background: var(--item-active-color);
            transform: scale3d(0.95, 0.95, 0.95) rotateY(-10deg);

            transition:
                background 0.05s,
                transform 0.05s ease;
        }

        &:focus-visible {
            outline: 2px solid blue;
        }
    }
</style>
