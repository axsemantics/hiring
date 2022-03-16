<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { withBase, useData } from 'vitepress'
const props = defineProps({
	label: String,
	link: String
})
const emit = defineEmits([])
</script>
<template lang="pug">
a.c-call-to-action-button(:href="withBase(props.link)") {{ props.label}}
</template>
<style lang="stylus">
.c-call-to-action-button
	display: flex
	background-color: var(--c-brand)
	color: white
	height: 52px
	line-height: @height
	padding: 0 64px
	border-radius: 4px
	font-size: 20px
	font-weight: 500

	&:hover
		text-decoration: none
		background-color: var(--c-brand-dark)
</style>


