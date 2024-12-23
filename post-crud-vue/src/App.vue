<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
        <RouterLink to="/posts/create">Posts Create</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style>
</style>