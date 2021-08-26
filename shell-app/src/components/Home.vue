<template>
	<h1>Home</h1>
	<h2>{{customerName}}</h2>
	<div>{{ today }}</div>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi harum dolor, deserunt, earum id aut enim dolores sit, cumque esse assumenda neque eligendi dicta quis. Itaque eaque doloremque aliquam.</p>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			customerName: "ZVJS",
			today: "26.8.2021"
		}
	}
}

// import { ref } from "vue";
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
// 	setup() {
// 		const customerName = ref("ZVJS");
		
// 		return { customerName };
// 	},
// })

</script>
