<template>
    <div>
       <h2 class="title">Editar paciente</h2>
        <b-container>
        <b-card>
            <b-form @submit.prevent="editarPaciente(paciente)">
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

            <b-button mt-5 type="submit" variant="primary">Editar</b-button>
            </b-form>
        </b-card>
        </b-container>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'EditarPaciente',

    data() {
        return {
            id: this.$route.params.id
        };
    },
    created(){
        this.traerPaciente(this.id)
    },
    methods: {
        ...mapActions(['traerPaciente', 'editarPaciente'])
    },
    computed:{
        ...mapState(['paciente'])
    }
};
</script>

<style lang="scss" scoped>

</style>