<script>
    import GridListItem from "./GridListItem.svelte";

    const gridListItems = [
        {
            title: "linux",
            icon: "fa-brands fa-linux",
            text: "desktop linux user for years. very fimiliar with the installation process, the command line, the most used sysadmin commands, etc.",
        },
        {
            title: "git",
            icon: "fa-brands fa-git-alt",
            text: "fimiliar enough to requently use `git rebase --interactive`",
        },

        {
            title: "python",
            icon: "fa-brands fa-python",
            text: "",
        },

        {
            title: "UI design",
            icon: "fa-brands fa-figma",
            text: "",
        },

        {
            title: "css (and html)",
            icon: "fa-brands fa-css3-alt",
            text: "",
        },

        {
            title: "javascript",
            icon: "fa-brands fa-js-square",
            text: "",
        },

        {
            title: "sql",
            icon: "fa-solid fa-database",
            text: "",
        },

        {
            title: "java",
            icon: "fa-brands fa-java",
            text: "",
        },

        {
            title: "php",
            icon: "fa-brands fa-php",
            text: "",
        },
    ];
</script>

<ul class="grid-list">
    {#each gridListItems as item}
        <GridListItem {...item} />
    {/each}
</ul>

<style>
    .grid-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 0.5rem;
    }
</style>
