const app = Vue.createApp({
	data() {
		return {
			titulo: 'Mi banco con Vue Js',
			cantidad: 1000,
			enlace: 'https://youtube.com/bluuweb',
			estado: false,
			servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
			desactivar: false
		}
	},
	methods: {
		agregarSaldo(){
			this.cantidad = this.cantidad + 100
		},
		disminuirSaldo(valor){
			if(this.cantidad === 0){
				alert('saldo en cero!')
				this.desactivar = true
				return
			}
			this.cantidad = this.cantidad - valor
		}
	},
	computed: {
		colorCantidad() {
			return this.cantidad > 500 ? 'text-success' : 'text-danger'
		},
		mayusculaTexto(){
			return this.titulo.toUpperCase()
		}
	}
})