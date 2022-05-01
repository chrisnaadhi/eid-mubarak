<script>
  import JSConfetti from "js-confetti";
  import { onMount } from "svelte";

  const confetti = new JSConfetti();
  let year = "1443";
  let shake = false;
  let maaf = false;

  function showConfetti() {
    confetti.addConfetti();
    maaf = true;
    shake = true;
    setTimeout(() => {
      shake = false;
      maaf = false;
    }, 1000);
  }

  function intro() {
    confetti.addConfetti();
  }

  onMount(() => {
    intro();
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>
</svelte:head>

<main>
  <div class="animate__animated animate__fadeIn">
    <p class="wonder">🕋 | 🕌</p>
    <h1>Eid Mubarak!</h1>
    <h2>{year} Hijriah</h2>
    <p>Selamat Idul Fitri 1443 H</p>
    <p class={maaf ? "maaf animate__animated animate__heartBeat" : "maaf"}>
      Mohon Maaf Lahir dan Batin
    </p>
    <span
      on:click={showConfetti}
      class={shake ? "salam animate__animated animate__shakeY" : "salam"}
      >🤝</span
    >
    <p on:click={showConfetti} class="salam-teks">Klik untuk bersalaman</p>
  </div>
  <footer>
    <p>
      2022 | Chrisna Adhi Pranoto - Built with <a
        href="https://svelte.dev/"
        target="_blank">Svelte</a
      >
    </p>
  </footer>
</main>

<style>
  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  main {
    height: 100%;
    background-image: url("bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20em;
  }

  .wonder {
    font-size: 3em;
  }

  h1,
  h2 {
    color: #fff;
  }

  p {
    text-align: center;
    color: #fff;
  }

  .maaf {
    font-size: 1.2em;
  }

  .salam {
    font-size: 4rem;
    position: absolute;
    margin-top: 12rem;
    cursor: pointer;
  }

  .salam-teks {
    position: absolute;
    margin-top: 17rem;
    font-style: italic;
    cursor: pointer;
  }

  footer {
    color: #fff;
    font-style: italic;
    bottom: 0;
    position: absolute;
    width: 100%;
  }

  footer > p {
    font-size: 1em;
    padding-bottom: 1em;
  }

  a {
    color: orangered;
  }
</style>
