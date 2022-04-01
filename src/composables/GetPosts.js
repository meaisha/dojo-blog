import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore"

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {

      //const q = query(collection(db, "posts"), orderBy("createdAt"), limit(2));
      const q = query(collection(db, "posts"), orderBy("createdAt"));

      const querySnapshot = await getDocs(q);

      posts.value = querySnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { posts, error, load }
}

export default getPosts