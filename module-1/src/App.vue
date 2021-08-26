<template>
	<h1>{{text}}</h1>
	<div>
		This template comes with:
		<ul>
			<li>
				<h3>vue: ^3.2.2</h3>
			</li>
			<li>
				<h3>webpack: ^5.50.0</h3>
				+ webpack-dev-server w/ --hot enabled
			</li>
			<li>
				<h3>postcss: ^8.3.6</h3>
				+ autoprefixer, postcss-vwh, postcss-color-function
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: 'App',
	data() {
		return {
			text: 'Vue works!'
		}
	},
}

</script>

<style scoped>

h1 {
	color: color(green a(50%));
	font-size: 10vwh;
}
h3 {
	margin-bottom: 0px;
}

</style>