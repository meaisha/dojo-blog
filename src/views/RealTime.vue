<template>
  <h1>Realtime Data</h1>
  <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
    </div>
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, query, getDocs, orderBy, onSnapshot } from "firebase/firestore"
import PostList from '@/components/PostList'

export default {
  name: "realtime",
  components: { PostList },
  setup() {
    const posts = ref([])
    const error = ref(null)

    try {
      const q = query(collection(db, "posts"), orderBy("createdAt"));
      const realtimeData = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            posts.value.push({ ...doc.data(), id: doc.id });
        });
        console.log(posts);
      });
    } catch(err) {
      error.value = err.message
    }

    return { posts, error }

  }
}
</script>

<style>

</style>