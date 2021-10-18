<template>
    <div>
        <h2 class="title">Agregar paciente</h2>
        <b-container>
        <b-card>
            <b-form @submit.prevent="agregarNuevoPaciente">
            <b-form-group label="Nombre:" label-for="nombre">
                <b-form-input
                id="nombre"
               
                placeholder="Nombre del paciente"
                required
                v-model="paciente.nombre"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="apellido" label-for="apellido">
                <b-form-input
                id="apellido"
             
                placeholder="Ingrese apellido"
                required
                v-model="paciente.apellido"
                ></b-form-input>
            </b-form-group>
             <b-form-group label="edad" label-for="edad">
                <b-form-input
                id="edad"
            
                placeholder="Ingrese edad"
                required
                v-model="paciente.edad"
                ></b-form-input>
            </b-form-group>
             <b-form-group label="prevision" label-for="prevision">
                <b-form-input
                id="prevision"
               
                placeholder="Ingrese prevision"
                required
                v-model="paciente.prevision"
                ></b-form-input>
            </b-form-group>

            <b-button mt-5 type="submit" variant="primary">Agregar</b-button>
            </b-form>
        </b-card>
        </b-container>
        
        <!-- <b-form @submit.prevent="agregarNuevoPaciente">
            <b-form-input 
            type="text" 
            id="nombre"
            name="nombre" 
            label="nombre"  
            v-model="paciente.nombre"
            >
            <input type="text"  id="apellido"
            name="apellido"  v-model="paciente.apellido">
            <input type="number"  id="edad"
            name="edad"  v-model="paciente.edad">
             <input type="text"  id="prevision"
            name="prevision"  v-model="paciente.prevision">
            <button type="submit">Agregar</button>

        </b-form> -->
    </div>
</template>

<script>
// import {mapActions} from 'vuex'
export default {
    name: 'Agregarpaciente',

  data: () => ({
    paciente: {
      nombre: null,
      apellido: null,
      edad: '',
      prevision: null
    }
  }),
    mounted() {
        
    },

    methods: {
        // ...mapActions(['agregarPaciente'])
    agregarNuevoPaciente() {
        this.$store.dispatch('agregarPaciente', { ...this.paciente })
        this.$router.push('/')
    }
    },
};
</script>

<style scoped>

</style>