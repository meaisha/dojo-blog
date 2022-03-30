<template>
  <div class="tag">
    <h1>Tag View</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="filteredPosts.length">
      <PostList :posts="filteredPosts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import getPosts from '../composables/GetPosts'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
// component imports
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'tagview',
  components: { PostList, Spinner },
  setup() { 
    
    const { posts, error, load } = getPosts()

    const route = useRoute()

    load(route.params.tag)

    const filteredPosts = computed( () => {
      return posts.value.filter( ( p => { return p.tags.includes( route.params.tag ) } ))
    } )

    return { filteredPosts, error }
  },
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>