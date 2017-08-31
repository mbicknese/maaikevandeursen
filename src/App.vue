<template>
  <div id="app">
    <header>
      <div>
        <h1>
          IvDP
          <small>
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
