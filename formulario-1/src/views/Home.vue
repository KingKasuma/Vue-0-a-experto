<template>
  <form @submit.prevent="procesarFormulario">
  	  <input 
  	  	type="text" name="" 
  	  	class="form-control my-w" 
  	  	placeholder="Ingrese un nombre" 
  	  	v-model.trim="tarea.nombre"
  	  >

  	  <div class="form-check form-check-inline">
  	  	<input
  	  		type="checkbox"
  	  		id="check-1"
  	  		class="form-check-input"
  	  		v-model="tarea.categorias"
  	  		value="javascript"
  	  	>
  	  	<label for="check-1" class="form-check-label">Javascript</label>
  	  </div>
  	  <div class="form-check form-check-inline">
  	  	<input
  	  		type="checkbox"
  	  		id="check-2"
  	  		class="form-check-input"
  	  		v-model="tarea.categorias"
  	  		value="node js"
  	  	>
  	  	<label for="check-2" class="form-check-label">Node.js</label>
  	  </div>

  	  <div class="mt-2">
  	  	<div class="form-check form-check-inline">
  	  		<input 
  	  			type="radio" 
  	  			id="radio-1"
  	  			class="form-check-input"
  	  			value="urgente"
  	  			v-model="tarea.estado"
  	  		>
  	  		<label for="radio-1" class="form-check-label">Urgente</label>
  	  	</div>
  	  	<div class="form-check form-check-inline">
  	  		<input 
  	  			type="radio" 
  	  			id="radio-2"
  	  			class="form-check-input"
  	  			value="relax"
  	  			v-model="tarea.estado"
  	  		>
  	  		<label for="radio-2" class="form-check-label">Relax</label>
  	  	</div>
  	  </div>  	

  	  <div class="mt-2">
  	  	<input 
  	  		type="number"
  	  		class="form-control" 
  	  		v-model.number="tarea.numero"
  	  	>
  	  </div>

  	  <button 
  	  	class="btn btn-dark mt-2 btn-block" 
  	  	type="submit"
  	  	:disabled="bloquear"
  	  >
  		Procesar
  	  </button>

  </form>
  <hr>
  <p>{{tarea}}</p>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  data(){
  	return {
  		tarea: {
  			nombre: '',
  			categorias: [],
  			estado: '',
  			numero: 0
  		}
  	}
  },
  computed:{
  	bloquear(){
  		return this.tarea.nombre.trim() === "" ? true : false
  	}
  },
  methods: {
  	procesarFormulario(){
  		console.log(this.tarea)
  		if(this.tarea.nombre.trim() === ""){
  			console.log('Campo vacio')
  			return
  		}
  		console.log('no esta vacio')
  		// envian los datos

  		this.tarea = {
  			nombre: '',
  			categorias: [],
  			estado: '',
  			numero: 0
  		}
  	}
  }
}
</script>
