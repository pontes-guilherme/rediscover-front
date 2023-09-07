<template>
  <v-app-bar class="px-3" flat>
    <RouterLink
      class="nav-item text-decoration-none text-primary"
      to="/"
    >
      <div class="logo ml-10">
        <span class="text-primary font-weight-bold text-sm-h6">REDISCOVER</span>
      </div>
    </RouterLink>

    <v-spacer></v-spacer>

    <div class="nav-items">
      <RouterLink
        class="nav-item text-decoration-none text-primary"
        :to="link.path"
        v-for="link in links"
        :key="link.path"
      >
        <v-btn variant="text">{{ link.title }}</v-btn>
      </RouterLink>
    </div>

    <v-spacer></v-spacer>

    <div class="avatar">
      <v-avatar
        class="hidden-sm-and-down mr-10"
        color="grey-darken-1"
        size="32"
      ></v-avatar>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
const links = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Discover',
        path: '/discover',
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
]
</script>

<style scoped lang="scss">
.avatar, .logo {
  width: 15%;
}

.avatar {
  display: flex;
  justify-content: flex-end;
}

.nav-items {
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-item {
    margin: 0 10px;
    min-width: 120px;

    button {
      width: 100%;
    }
  }
}
</style>
