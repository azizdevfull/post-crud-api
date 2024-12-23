<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <img :src="post.image" alt="Post Image" v-if="post.image" width="100" />
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { usePostStore } from "@/stores/post";

export default {
  setup() {
    const postStore = usePostStore();

    // Refetch posts when the component is mounted
    onMounted(() => {
      postStore.fetchPosts();
    });

    // Use computed to bind to the reactive store state
    const posts = computed(() => postStore.posts);

    return { posts };
  },
};
</script>
