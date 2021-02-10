<template>

  <h1 class="my-5">Formularios con Vue.js</h1>
  <form @submit.prevent="procesarFormulario">  	  
  	<Input :tarea="tarea" />
  </form>
  <hr>
  <ListaTareas />
</template>

<script>

import Input from '../components/Input'
import ListaTareas from '../components/ListaTareas'
import {mapActions} from 'vuex'
const shortid = require('shortid');

export default {
  name: 'Home',
  components: {
  	Input, ListaTareas
  },
  data(){
  	return {
  		tarea: {
  			id: '',
  			nombre: '',
  			categorias: [],
  			estado: '',
  			numero: 0
  		}
  	}
  },  
  methods: {
  	...mapActions(['setTareas']),
  	procesarFormulario(){
  		console.log(this.tarea)
  		if(this.tarea.nombre.trim() === ""){
  			console.log('Campo vacio')
  			return
  		}
  		console.log('no esta vacio')
  		// generar id
  		this.tarea.id = shortid.generate()
  		console.log(this.tarea.id)
  		this.setTareas(this.tarea)
  		// envian los datos

  		// Limpiar datos
  		this.tarea = {  
  			id : '',
  			nombre: '',
  			categorias: [],
  			estado: '',
  			numero: 0
  		}
  	}
  }
}
</script>
