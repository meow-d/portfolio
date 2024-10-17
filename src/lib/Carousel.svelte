<script>
    import { onMount } from "svelte";
    import foodmanjones from "../assets/FoodManJones.png";
    let carousel;
    let cells;
    let cellCount;
    let selectedIndex = 0;
    let cellWidth;
    let cellHeight;
    let isHorizontal = true;
    let rotateFn = isHorizontal ? "rotateY" : "rotateX";
    let radius;
    let theta;

    onMount(() => {
        carousel = document.querySelector(".carousel-inner");
        cells = carousel.querySelectorAll(".card");
        cellCount = cells.length;
        var cellWidth, cellHeight;

        function setCellDimensions() {
            // @ts-ignore
            cellWidth = carousel.offsetWidth;
            // @ts-ignore
            cellHeight = carousel.offsetHeight;
        }

        function rotateCarousel() {
            let angle = theta * selectedIndex * -1;
            carousel.style.transform =
                "translateZ(" +
                -radius +
                "px) " +
                rotateFn +
                "(" +
                angle +
                "deg)";
        }

        let prevButton = document.querySelector(".previous-button");
        prevButton.addEventListener("click", function () {
            selectedIndex--;
            rotateCarousel();
        });

        let nextButton = document.querySelector(".next-button");
        nextButton.addEventListener("click", function () {
            selectedIndex++;
            rotateCarousel();
        });

        function changeCarousel() {
            setCellDimensions();

            theta = 360 / cellCount;
            let cellSize = isHorizontal ? cellWidth : cellHeight;
            radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
            for (let i = 0; i < cells.length; i++) {
                let cell = cells[i];
                cell.style.opacity = "1";
                let cellAngle = theta * i;
                cell.style.transform =
                    rotateFn +
                    "(" +
                    cellAngle +
                    "deg) translateZ(" +
                    radius +
                    "px)";
            }

            rotateCarousel();
        }

        changeCarousel();

        window.addEventListener("resize", changeCarousel);
    });
</script>

<section>
    <div class="carosel-button-container">
        <h2 style="display: inline-block; margin-right: 1rem;">stuff i did</h2>
        <button class="previous-button"
            ><i class="fa-solid fa-caret-left"></i></button
        >
        <button class="next-button"
            ><i class="fa-solid fa-caret-right"></i></button
        >
        <div class="spacer"></div>
    </div>
    <div class="carousel">
        <div class="carousel-inner">
            <div class="card">
                <div>
                    <h3>FoodManJones</h3>
                    <p>
                        Final year project. It's rushed and incomplete, but it's
                        the only school assignment where I put effort into the
                        design.
                    </p>
                    <p>
                        There is an older version hosted on Vercel. It doesn't
                        have features like recommendations, image uploads, etc.
                        But it's there if you wanna see my design.
                    </p>
                    <div class="links">
                        <a
                            href="https://github.com/farm-info/software-development-project"
                            >git repo</a
                        >
                        <a href="https://foodmanjones.vercel.app/"
                            >link (older version)</a
                        >
                    </div>
                </div>
                <!-- TODO make this 1:1 -->
                <img src={foodmanjones} alt="" />
            </div>
            <div class="card">
                <div>
                    <h3>Farm.info</h3>
                    <p>
                        Another school assignment. It looks awful and I'm really
                        really not proud of this.
                    </p>
                    <p>
                        The version hosted on Glitch stopped working for some
                        reason.
                    </p>
                    <div class="links">
                        <a
                            href="https://github.com/farm-info/software-development-project"
                            >git repo</a
                        >
                        <a href="https://farm-info.glitch.me"
                            >link (stopped working)</a
                        >
                    </div>
                </div>
                <!-- <img src={foodmanjones} alt="" /> -->
            </div>
            <div class="card"></div>
        </div>
    </div>
</section>

<style>
    .carousel {
        width: 100%;
        height: 70vh;
        perspective: 1000px;
    }

    .carosel-button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
    }

    .spacer {
        flex-grow: 1;
    }

    /* TODO some duplicate code, should have shared a button component, but whatever */
    .carosel-button-container button {
        height: fit-content;
        font-size: 1.5rem;

        perspective: 1000px;
        transform-style: preserve-3d;

        background: var(--item-color);
        border: var(--item-border);
        color: white;
        border-radius: 20%;

        transition:
            background 0.1s,
            transform 0.1s ease;

        &:hover {
            background: var(--item-hover-color);
            transform: scale3d(1.1, 1.1, 1.1) rotateY(10deg);
        }

        &:active {
            background: var(--item-active-color);
            transform: scale3d(0.9, 0.9, 0.9) rotateY(-10deg);

            transition:
                background 0.05s,
                transform 0.05s ease;
        }
    }

    .carousel-inner {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.5s ease-in-out;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        background: rgba(31, 31, 31, 0.75);
        border: var(--item-border);
        border-radius: 30px;
        padding: 1rem;

        width: 80%;
        height: 80%;
        position: absolute;
        /* TODO temp solution */
        overflow-x: hidden;
        transition:
            transform 1s,
            opacity 1s;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media (max-width: 600px) {
        .card {
            grid-template-columns: 1fr;
        }
    }

    .card * {
        margin: 0;
        padding: 1rem;
        box-sizing: border-box;
        width: 100%;
    }

    .card .links {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }

    .card .links a {
        padding: 0.5rem;
    }

    .card img {
        border-radius: 40px;
        height: auto;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }
</style>
