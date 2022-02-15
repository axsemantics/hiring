import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/400-italic.css'
import '@fontsource/roboto/700-italic.css'
import '@fontsource/roboto-mono'
import '@fontsource/roboto-condensed'
import Layout from './Layout.vue'
import DefaultTheme from 'vitepress/theme'
import './style.styl'

export default {
	...DefaultTheme,
	Layout,
	// NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
	enhanceApp({ app, router, siteData }) {
		// app is the Vue 3 app instance from `createApp()`. router is VitePress'
		// custom router. `siteData` is a `ref` of current site-level metadata.
	}
}
