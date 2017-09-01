<template>
  <div id="app">
    <header class="navbar navbar-expanded">
      <div class="container">
        <h1 class="navbar-brand mb-0 d-block w-100">
          IvDP
          <small class="float-sm-right text-secondary d-sm-block d-none">
            Instituut voor Duurzame Pedagogiek
          </small>
        </h1>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer class="bottom-footer">
      <div class="container text-center">
        <p>&copy; 2017 Instituut voor Duurzame Pedagogiek</p>
        <nav class="social">
          <ul>
            <li><a href="https://twitter.com/het_IvDP">
              <svg><use xlink:href="static/icons.svg#icon-twitter"></use></svg>
            </a></li>
            <li><a href="https://www.facebook.com/Instituut-voor-Duurzame-Pedagogiek">
              <svg><use xlink:href="static/icons.svg#icon-facebook"></use></svg>
            </a></li>
            <li><a href="https://plus.google.com/">
              <svg><use xlink:href="static/icons.svg#icon-google-plus"></use></svg>
            </a></li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
  header.navbar {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    color: #6200EA;
    background: #FFF;
  }

  .bottom-footer {
    color: #263238;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  main {
    background: #FAFAFA;
    overflow: hidden;
    padding-bottom: 5rem;
  }

  .social ul {
    list-style: none;
    padding: 0;
  }
  .social li {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    padding: 0.75rem;
  }
  .social a svg {
    width: 100%;
    height: 100%;
    fill: #7C4DFF;
  }
  .social a:hover svg {
    fill: #651FFF;
  }
</style>
