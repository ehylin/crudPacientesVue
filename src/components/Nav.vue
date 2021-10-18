<template>
    <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item class="link"><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item class="link"><router-link to="/about">About</router-link></b-nav-item>
            <b-nav-item class="link"><router-link to="/login">Login</router-link></b-nav-item>
          </b-navbar-nav>
        </b-navbar>
         <router-view />
    </div>
</template>

<script>
export default {
    name: 'Nav',
};
</script>

<style  scoped>
.link a{
  text-decoration: none;
  color: #fff;
}

</style>