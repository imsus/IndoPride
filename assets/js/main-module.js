import fetchInject from 'https://cdn.jsdelivr.net/npm/fetch-inject@2.0.2/dist/fetch-inject.es.min.js'
import { register } from 'https://cdn.jsdelivr.net/npm/register-service-worker@1.5.2/src/index.js'

fetchInject([CSS_LINK]).then(() => {
  register('/sw.js', {
    ready (registration) {
      console.log('Service worker is active.')
    },
    registered (registration) {
      console.log('Service worker has been registered.')
    },
    cached (registration) {
      console.log('Content has been cached for offline use.')
    },
    updatefound (registration) {
      console.log('New content is downloading.')
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
})
