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
    <router-view></router-view>
    <footer class="bottom-footer">
      <p>Copyright &copy; 2017 IvDP</p>
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
</style>
