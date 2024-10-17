<script>
    import SkillsListItem from "./SkillsListItem.svelte";

    const gridListItems = [
        {
            title: "linux",
            icon: "fa-brands fa-linux",
            text: "desktop linux user for since i was a kid. very fimiliar with the installation process, the command line, the most common sysadmin commands, etc.",
        },

        {
            title: "git",
            icon: "fa-brands fa-git-alt",
            text: "fimiliar enough to requently use `git rebase --interactive`",
        },

        {
            title: "UI design",
            icon: "fa-brands fa-figma",
            text: "i like to pay attention to the small details. i feel like i'm pretty good at design for a developer",
        },

        {
            title: "frontend web dev",
            icon: "fa-brands fa-css3-alt",
            text: "mainly good at css. have minor experience with frameworks like react, svelte, and next.js",
        },

        {
            title: "python",
            icon: "fa-brands fa-python",
            text: "won't consider myself a python expert, but it is my go-to language for personal projects",
        },

        {
            title: "java",
            icon: "fa-brands fa-java",
            text: "",
        },

        {
            title: "backend web dev",
            icon: "fa-brands fa-php",
            text: "some experience with django and vanilla php; knows the bare minimum amount of sql",
        },

        {
            title: "R",
            icon: "fa-brands fa-r-project",
            text: "i'm putting this here just for fun i suck at using R i would rather go back to python please let me use python",
        },
    ];
</script>

<ul class="grid-list">
    {#each gridListItems as item}
        <SkillsListItem {...item} />
    {/each}
</ul>

<style>
    .grid-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 0.5rem;
        padding: 0;
    }
</style>
