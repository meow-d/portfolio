<script>
    import "aplayer/dist/APlayer.min.css";
    import { APlayer } from "aplayer";
    import { onMount } from "svelte";

    onMount(() => {
        const ap = new APlayer({
            container: document.getElementById("aplayer"),
            fixed: true,
            autoplay: true,
            theme: "#F57F17",
            order: "random",
            lrcType: 3,
            audio: [
                {
                    name: "name",
                    artist: "artist",
                    url: "url",
                    cover: "cover",
                    lrc: "lrc",
                },
            ],
        });
    });
</script>

<div id="aplayer"></div>

<style>
    #aplayer {
        width: 400px;
        height: 400px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }
</style>
