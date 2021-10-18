<template>
  <div class="home">
    <b-container>
    <HelloWorld msg="Crud vue vuex firebase"/>
  <!-- <button @click="$store.dispatch('traerTodosLosPacientes')" >Actulizar pacientes</button> -->
      <router-link to='/agregarPaciente'>
      <b-button class="btn-add" variant="outline-primary">Agregar paciente</b-button>
      </router-link>

     <b-list-group mt-5>
      <b-list-group-item v-for="paciente in $store.state.pacientes" :key="paciente.id">
         {{paciente.nombre}}   {{paciente.apellido}} - Años: {{paciente.edad}} años |
         {{paciente.prevision}}
           <router-link :to="{name: 'EditarPaciente', params: {id: paciente.id}}">
            <b-button variant="success" >Editar</b-button>
          </router-link> 

          <b-button variant="danger" @click="$store.dispatch('eliminarPaciente', paciente.id)">Eliminar</b-button>
      </b-list-group-item>
    </b-list-group> 


    </b-container>
  </div>
</template>

<script>
//import Firebase from 'firebase'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: () =>({
    pacientes: [],
    fields: ['nombre', 'apellido', 'edad', 'prevision', { key: 'actions', label: 'Actions' }],
  }),
  mounted(){

  this.$store.dispatch('traerTodosLosPacientes');

    // Firebase.firestore().collection("pacientes").get()
    // .then(collection =>{
    //   collection.forEach(document => {
    //     this.pacientes.push({id: document.id, ...document.data() })
    //   })
    // });
  },
  methods:{
    // eliminarPaciente(){
    //    this.$store.dispatch('eliminarPaciente', this.idPaciente)
    // }
  },
}
</script>
<style scoped>
.btn-add{
  margin-bottom: 40px;
  margin-top: 20px;
}
</style>
