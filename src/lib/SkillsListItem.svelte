<script>
    export let title, text, icon;
    let textElement;
    let indicator;

    function toggleGridListText() {
        textElement.classList.toggle("hidden");
        indicator.classList.toggle("fa-spin");
    }
</script>

<button on:click={toggleGridListText}>
    <div class="title-and-icon">
        <i class={icon}></i>
        <div class="spacer"></div>
        <span class="grid-list-title">{title}</span>
        <div class="spacer"></div>

        <!-- TODO is there a more elgant way to do this? without js, that is -->
        {#if text}
            <i
                bind:this={indicator}
                class="indicator fa-solid fa-asterisk fa-fade"
            ></i>
        {/if}
    </div>

    {#if text}
        <div bind:this={textElement} class="text hidden">{text}</div>
    {/if}
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

    /* title and icon */
    .title-and-icon {
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .grid-list-title {
        margin: auto;
    }

    .spacer {
        flex-grow: 1;
    }

    i {
        font-size: 1.5rem;
        margin-right: 1rem;

        /* not needed since we're using flexbox */
        float: left;
    }

    /* indicator */
    .indicator {
        font-size: 1rem;
    }

    /* text */
    .text {
        display: block;
        margin-top: 1rem;
    }

    .hidden {
        display: none !important;
    }
</style>
