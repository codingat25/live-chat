import { ref, watchEffect } from "vue"
import { projectFirestore } from "../firebase/config"


const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

    const unsub = collectionRef.onSnapshot((snap) => {
        console.log('snapshot')
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({...doc.data(), id: doc.id})
        })

        documents.value = results
        error.value = null
    }, () => {
        console.log(err.message)
        documents.value = null
        error.value = 'Could not fetch data'
    })


    watchEffect((onInvalidate) => {
        onInvalidate(() => {
            unsub()
        })
    })


    return {documents, error}
}

export default getCollection