<template>
  <div id="app">
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
//引入Tabbar组件
import Tabbar from "@/components/Tabbar"
export default {
	components:{
		Tabbar
	},
	//设置路径
	beforeCreate(){
		this.$router.push("/");
	}
}
</script>

<style>
*{
	padding:0;
	margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
