<template>
  <div class="container mt-5">
    <h1 class="display-5 text-center">
      Binnenkort gereed!
    </h1>
    <p class="mb-5 mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan ipsum augue, ac laoreet diam fermentum in. Integer aliquet a lacus vel iaculis. Quisque porttitor, mauris nec malesuada consequat, dolor ante fringilla erat, non rhoncus ligula nunc nec orci.
    </p>
<!-- Begin MailChimp Signup Form -->
    <article id="mc_embed_signup" class="row row-backbordered">
      <div class="col-sm-12">
        <form class="card" action="//ivdp.us16.list-manage.com/subscribe/post?u=98b60bccc209b1ee2c26a17e8&amp;id=3ed5cfb005" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
          <div class="card-body pr-md-5 pl-md-5 pt-5" id="mc_embed_signup_scroll">
            <div class="row">
              <div class="col-12 col-md-6">
                <h2 class="h5">Blijf op de hoogte!</h2>
                <p class="text-muted">Als eerste nieuwe informatie en exclusieve nieuwsbrief blogs?</p>
              </div>

              <div class="col-md-6 row no-gutters mt-lg-2">
                <div class="col-12 col-lg-8 mb-1">
                  <input class="form-control form-control-lg" type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="email adres" required>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_98b60bccc209b1ee2c26a17e8_3ed5cfb005" tabindex="-1" value=""></div>
                <div class="col-12 col-lg-4">
                  <input class="btn btn-subscribe btn-lg ml-lg-1" type="submit" value="Schrijf In" name="subscribe" id="mc-embedded-subscribe">
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </article>

<!--End mc_embed_signup-->
  </div>
</template>

<script>
export default {
  name: 'Coming Soon'
}
</script>

<style scoped>
.row-backbordered {
  position: relative;
}
.row-backbordered:before {
    content: '';
    position: absolute;
    display: block;
    top: 45%;
    left: -1000px;
    right: -1000px;
    height: 1px;
    background-color: #dcdfe4;
}
.card {
    border-top: 5px solid #6200EA;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}
  .card p, .card button, .card input {
    font-weight: 100;
  }
  .card input {
    font-size: 0.75em;
  }
.btn-subscribe {
    background-color: #7C4DFF;
    color: #FFF;
    width: 100%;
}
</style>
