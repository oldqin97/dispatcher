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
