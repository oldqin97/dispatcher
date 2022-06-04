<!--
 @Author: oq <oldqin1997@gmail.com>
 @Date: 2022-06-04 21:43:56
 @Last Modified by: oq <oldqin1997@gmail.com>
 @Last Modified time: 2022-06-04 21:43:56
-->

<template>
	<counter-result :result="result" />
	<div>
		<!-- <counter-button innerText="+" action="PLUS" @compute="compute" /> -->
		<!--<counter-button innerText="-" action="MINUS" @compute="compute" /> -->

		<counter-button innerText="+" action="PLUS" @dispatch="dispatch" />
		<counter-button innerText="-" action="MINUS" @dispatch="dispatch" />
	</div>
</template>

<script>
	import CounterResult from './Result';
	import CounterButton from './Button';

	import dispatch from '@/dispatch/counte';

	export default {
		name: 'Counter',
		components: {
			CounterResult,
			CounterButton,
		},
		data() {
			return {
				result: 0,
			};
		},
		methods: {
			// compute(action) {
			// 	switch (action) {
			// 		case 'PLUS':
			// 			this.result += 1;
			// 			break;
			// 		case 'MINUS':
			// 			this.result -= 1;
			// 			break;
			// 		default:
			// 			break;
			// 	}
			// },

			dispatch(...args) {
				dispatch(this)(...args);
			},
		},
	};
</script>

<style></style>
