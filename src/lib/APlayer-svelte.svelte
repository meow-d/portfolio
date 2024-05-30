<script>
    import Aplayer from "svelte-aplayer/dist/svelte/svelte-aplayer.es.js";
    import "svelte-aplayer/dist/svelte/style.css";
</script>

<div id="aplayer">
    <Aplayer
        mini={true}
        autoplay={true}
        theme="#F57F17"
        loop="all"
        fixed={true}
        audio={{
            name: "君の知らない物語",
            artist: "supercell",
            cover: "https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.jpg",
            url: "https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.mp3",
        }}
    />
</div>

<style>
    #aplayer {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 999;
        margin: 2rem;
    }
</style>
