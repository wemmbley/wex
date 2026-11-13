import { useJQuery, component, directive, filter, View } from './wex.js'
import { shareState } from './shared-state.js'
import { createAsyncComponent } from './async.js'
import { createRouter, route } from './router.js'
import { createWire, $wire } from './wire'
import { createLazy } from './w-lazy.js'
import './w-prefetch.js'
import { setupModal } from './modal.js'

// use in browser
if (typeof jQuery !== 'undefined') {
  useJQuery(jQuery)
  setupModal(jQuery)
}

export {
  component,
  directive,
  filter,
  View,
  useJQuery,
  shareState,
  createAsyncComponent,
  createRouter,
  route,
  createLazy,
  createWire,
  $wire,
}

if (typeof window !== 'undefined') {
  window.$wire = $wire
}