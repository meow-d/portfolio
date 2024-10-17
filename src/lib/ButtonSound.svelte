<script>
    import { onMount } from "svelte";
    import clickAudioPath from "/src/assets/sfx/734218__okularperpendikular__plasticmouseclick.ogg";
    import hoverAudioPath from "/src/assets/sfx/470436__erokia__menu-ui-click-206.wav";

    function addListeners(button) {
        const hoverAudio = new Audio(hoverAudioPath);
        const clickAudio = new Audio(clickAudioPath);

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

    function main() {
        var buttons = document.getElementsByTagName("button");

        for (var i = 0; i < buttons.length; i++) {
            addListeners(buttons[i]);
        }
    }

    onMount(() => {
        main();
    });
</script>
