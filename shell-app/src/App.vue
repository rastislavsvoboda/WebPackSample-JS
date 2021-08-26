<template>
	<h1>Co to je?</h1>
  <div class="menu">
    <ul v-for="item in menuItems" :key="item.id">
			<li>
				{{item.name}}
			</li>
		</ul>
  </div>
  <div class="module-content">
		<Home />
	</div>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  data() {
    return {
      menuItems: [
        {
          id: "module-1",
          name: "Module1",
          icon: "",
          link: "",
        },
        {
          id: "module-2",
          name: "Module2",
          icon: "",
          link: "",
        },
      ],
      text: "Vue works!",
    };
  },
	components: {
		Home
	}
};
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
