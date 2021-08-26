<template>
	<h1>Welcome</h1>
	<!-- <router-link to="Settings">Settings</router-link> -->
  <div class="menu">
    <ul v-for="item in menuItems" :key="item.id">
			<li>
				<router-link :to="{name: item.link}">
				{{item.name}}
				</router-link>
			</li>
		</ul>
  </div>
	<router-view />
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      menuItems: [
        {
          id: "home",
          name: "Home",
          icon: "",
          link: "Home",
        },
        {
          id: "settings",
          name: "Settings",
          icon: "",
          link: "Settings",
        },
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
	// components: {
	// 	Home,
	// 	Settings
	// }
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
