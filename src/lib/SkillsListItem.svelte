<script>
    export let title, text, icon;
    let textElement;
    let indicator;

    function toggleGridListText() {
        textElement.classList.toggle("hidden");
        indicator.classList.toggle("fa-spin");
    }
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Cousine&display=swap"
        rel="stylesheet"
    />
</svelte:head>

    <div class="title-and-icon">
        <i class={icon}></i>
        <div class="spacer"></div>
        <span class="grid-list-title">{title}</span>
        <div class="spacer"></div>

        {#if text}
            <i bind:this={indicator} class="indicator fa-solid fa-asterisk"></i>
        {/if}
    </div>

    {#if text}
        <div bind:this={textElement} class="text hidden">{text}</div>
    {/if}
</button>

<style>
    /* text style */
    .title-and-icon,
    .text {
        font-family: "Cousine", monospace;
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
