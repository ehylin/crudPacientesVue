<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <b-jumbotron header="" lead="">
        <!-- <p>Iniciar sesión</p>
        <b-button variant="primary"><router-link to="/login">Login</router-link></b-button>
        <router-view /> -->
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
}
</style>