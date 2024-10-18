<script>
    import Carousel from "./lib/Carousel.svelte";
    import Background from "./lib/Background.svelte";
    import SkillsListGrid from "./lib/SkillsListGrid.svelte";
    import Sound from "./lib/ButtonSound.svelte";
    import APlayerSvelte from "./lib/APlayer-svelte.svelte";
    import AutoplayCheck from "./lib/AutoplayCheck.svelte";
    import APlayer from "./lib/APlayer.svelte";
</script>

<Background />
<Sound />
<APlayerSvelte />
<!-- <APlayer /> -->

<main>
    <AutoplayCheck />
    <section>
        <h1>Wenyi's portfolio site</h1>
        <p>less of a portfolio site but more of me having fun</p>
        <p class="fa-fade scroll-down">
            (<i class="fa-solid fa-angles-down" style="font-size: .8rem;"></i>
            scroll down)
        </p>
    </section>

    <section>
        <h2 style="display: inline-block;">skills,</h2>
        <p style="display: inline;">
            from strongest to weakest. click to view.
        </p>
        <SkillsListGrid />
    </section>

    <Carousel />

    <section>
        <h2>education</h2>
        <ul>
            <li>
                Degree in Computer Science, specialism in Artificial
                Intelligence (currently studying)
                <ul>
                    <li>2024 - 2026</li>
                    <li>@ Asia Pacafic University</li>
                </ul>
            </li>
            <li>
                Diploma in ICT, specialism in Software Engineering
                <ul>
                    <li>2022 - 2024</li>
                    <li>@ Asia Pacafic University</li>
                    <li>honestly the education there suck</li>
                </ul>
            </li>
        </ul>
    </section>

    <section>
        <h2>contact</h2>
        <ul>
            <li>
                email: <a href="mailto:wenyi.lim@proton.me"
                    >wenyi.lim@proton.me</a
                >
            </li>
            <li>
                personal github: <a href="https://github.com/meow-d">meow-d</a>
            </li>
        </ul>
    </section>

    <footer>
        <h2>credits</h2>
        <p>made with svelte, vite, three.js, APlayer</p>
        <p>
            "Bicolor Cat"
            <a
                href="https://sketchfab.com/3d-models/bicolor-cat-e623a618ca344a8393d7ba4d63ec23cf"
            >
                model
            </a>
            by
            <a href="https://sketchfab.com/kenchoo">kenchoo</a>
            | License:
            <a href="http://creativecommons.org/licenses/by/4.0/">
                Attribution 4.0
            </a>
        </p>

        <p>
            <!-- <a href="https://freesound.org/people/Erokia/sounds/470435/">
                Menu UI Click 55
            </a>
            and -->
            <a href="https://freesound.org/people/Erokia/sounds/470436/">
                Menu UI Click 206
            </a>
            by <a href="https://freesound.org/people/Erokia/"> Erokia </a> |
            License:
            <a href="https://creativecommons.org/licenses/by/4.0/">
                Attribution 4.0
            </a> | some edits from me
        </p>

        <p>
            <a
                href="https://freesound.org/people/OkularPerpendikular/sounds/734218/"
            >
                PlasticMouseClick
            </a>
            by
            <a href="https://freesound.org/people/OkularPerpendikular/">
                OkularPerpendikular
            </a>
            | License:
            <a href="http://creativecommons.org/publicdomain/zero/1.0/">
                CC0
            </a>
        </p>
    </footer>
</main>
