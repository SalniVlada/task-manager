<template>
  <div class="container">
    <header class="header">
			<a @click="$router.push('/')" class="header__link">Главная</a>
			<img class="header__avatar" src="../assets/avatar.jpg" alt="monkey"/>
			<h2 class="header__title">Привет, Иван Иванов</h2>
			<div class="inputContainer">
					<input v-model="todo" type="text" placeholder="сделать..." class="taskList__input" v-on:keyup.enter="addTodo(id++)">
					<button @click="addTodo(id++)" class="list__button">+</button>
				</div>
		</header>

		<div class="list">
			<div class="taskList">
				<p class="taskList__title">Список дел</p>

				<div v-for="(todo, index) in todos" :key="todo.id" class="newList" @mouseover="todo.isHovered = true" @mouseleave="todo.isHovered = false">
					<input type="checkbox" v-model="todo.isComplete" class="newList__checkbox" @change="saveToLocalStorage"/>
					<input :value="todo.text" @input="event => todo.text = event.target.value" class="newList__title" :class="{newList__title_done: todo.isComplete}" 
					@focusout="saveToLocalStorage" v-on:keyup.enter="saveToLocalStorage"/>
					<button @click="remove(index)" class="newList__button"><img src="../assets/remove.png" class="newList__remove" v-show="todo.isHovered"/></button>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  data() {
		return {
			todo: "",
			todos: [],
			id: 0
		};
	},
	// сохранение данных в локальное хранилище
	async mounted() {
		const data = await localStorage.getItem('todos')
		if(data) {
			this.todos = JSON.parse(data).map(function (el) {
				el['isHovered'] = false
				return el
			})
			const ids = this.todos.map(x => x['id'])
			this.id = Math.max(...ids)
		}
	},

	methods: {
		// добавление новой строки
		addTodo() {
			if (this.todo != '') {
				this.todos.push({
					id: this.id,
					text: this.todo,
					isHovered: false,
					isComplete: false,
				})
				localStorage.setItem('todos', JSON.stringify(this.todos))
			}
			this.todo = "";
		},
		// переключение состояния
		saveToLocalStorage() {
			localStorage.setItem('todos', JSON.stringify(this.todos))
		},
		// удаление строки
		remove(index) {
			this.todos.splice(index, 1)
			localStorage.setItem('todos', JSON.stringify(this.todos))
		}
	}
}
</script>

<style scoped>
.container {
	width: 375px;
	margin: 0 auto;
	margin-top: 50px;
	display: flex;
	flex-direction: column;
}
.header {
	width: 375px;
	height: 331px;
	background-color:rgba(80, 194, 201, 1);
	position: relative;
}
.header__link {
	font-family: 'Sitka Small';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	text-align: center;
	color: #FFFFFF;
	cursor: pointer;
	position: absolute;
  left: 20px;
  top: 20px;
}
.header__avatar {
	width: 114px;
	height: 114px;
	margin-top: 50px;
	border-radius: 60px;
}
.header__title {
	font-family: 'Sitka Small';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	text-align: center;
	color: #FFFFFF;
	margin-top: 21px;
}
.list {
	width: 375px;
	height: 481px;
	background-color: #E5E5E5;
}
.list__title {
	font-family: 'Sitka Small';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	color: #000000;
	position: absolute;
	margin-top: 31px;
  margin-left: 31px;
}
.taskList {
	width: 317px;
	height: 366px;
	margin-left: 30px;
	margin-top: 50px;
	background: #FFFFFF;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 21px;
}
.taskList__title {
	font-family: 'Sitka Small';
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	color: #000000;
	margin-left: 20px;
  padding-top: 20px;
  width: 125px;
}
.inputContainer {
	display: flex;
  justify-content: center;
  align-items: center;
	padding-top: 10px;
}
.taskList__input {
	widows: 300px;
	height: 44px;
	background: #F4F6FA;
	border-radius: 21px;
	font-family: 'Sitka Small';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #B2B7BB;
	border: solid 1px #B2B7BB;
	outline: none;
	padding-left: 10px;
	margin-right: 10px;
}
.list__button {
	width: 44px;
	height: 44px;
	background: #F4F6FA;
	border-radius: 10px;
	cursor: pointer;
	border: solid 1px #B2B7BB;
	font-family: 'Sitka Small';
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
}
.newList{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.newList__checkbox {
	width: 25px;
	height: 25px;
	cursor: pointer;
	margin-left: 20px;
}
.newList__title {
	border: none;
	width: 200px;
	height: 25px;
	outline:none;
	font-family: 'Sitka Small';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 12px;
}
.newList__title_done {
	text-decoration: line-through;
	color: #E5E5E5;
}
.newList__button {
	width: 15px;
	height: 15px;
	background-color: white;
	border: none;
	cursor: pointer;
	margin-right: 20px;
}
.newList__disabled {
	display: none;
}
.newList__remove {
	width: 15px;
	height: 15px;
}
</style>
