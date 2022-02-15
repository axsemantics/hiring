<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
// import { withBase, useData } from 'vitepress'
// const { site, theme, localePath } = useData()
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
const props = defineProps({})
const emit = defineEmits([])
</script>
<template lang="pug">
Layout
	template(#page-bottom)
		footer
			p look at my footer, my footer is amazing
</template>
<style lang="stylus">
// $ax-primary = #0a974b

// html, body
// 	margin: 0
// 	font-family: 'Roboto', sans-serif

// header
// 	box-sizing: border-box
// 	height: 56px
// 	display: flex
// 	border-bottom: 2px solid $ax-primary
// 	padding: 8px

// 	> a
// 		display: flex

// 	nav
// 		display: flex

// .container
// 	max-width: 48rem
// 	margin: 0 auto
// 	padding: 0 1.5rem 4rem
</style>
