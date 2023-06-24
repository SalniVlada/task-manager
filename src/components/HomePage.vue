<template>
	<div class="container">
		<img class="container__img" src="../assets/img.png" alt="homepage"/>
		<h1 class="container__title">Список задач</h1>
		<h2 class="container__subtitle">Планируй свой день с помощью простого и функционального приложения, которое поможет тебе легко настраивать распорядок дня.</h2>
		<button @click="$router.push('/list')" class="container__btn">Начать</button>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
.container {
	width: 375px;
	height: 812px;
	margin: 0 auto;
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	background-color: #efefef;
	display: flex;
	align-items: center;
}
.container__img {
	width: 180px;
	height: 168px;
	margin-top: 205px;
}
.container__title {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	color: rgba(0, 0, 0, 0.8);
	margin-top: 91px;
}
.container__subtitle {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	text-align: center;
	color: #5B5B5B;
	width: 315px;
}
.container__btn {
	width: 272px;
	height: 56px;
	background: #50C2C9;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 27px;
	text-align: center;
	color: #FFFFFF;
	margin-top: 65px;
	border: none;
	cursor: pointer;
}
</style>