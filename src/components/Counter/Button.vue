<!--
 @Author: oq <oldqin1997@gmail.com>
 @Date: 2022-06-04 21:42:34
 @Last Modified by: oq <oldqin1997@gmail.com>
 @Last Modified time: 2022-06-04 21:42:37
-->

<template>
	<button :action="action" @click="compute">{{ innerText }}</button>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			action: String,
			innerText: String,
		},
		methods: {
			compute() {
				// this.$emit('compute', this.action);
				this.$emit('dispatch', this.action);
			},
		},
	};
</script>

<style></style>
