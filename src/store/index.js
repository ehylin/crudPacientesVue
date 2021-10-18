import Vue from "vue";
import Vuex from "vuex";
import Firebase from 'firebase'
import router from '../router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    pacientes: [],
    paciente: {nombre: '', id: '', edad: '', apellido: '', prevision: ''}
  },
  mutations: {
    SET_PACIENTES(state, nuevosPacientes){
      state.pacientes = nuevosPacientes
    },
    SET_PACIENTE(state, paciente){
      state.paciente = paciente
    },
    ADD_PACIENTES(state, addPaciente){
      state.pacientes.push(addPaciente)
    },
    ELIMINAR_PACIENTE(state, idPaciente) {
      state.pacientes = state.pacientes.filter(item => item.id !== idPaciente)
    },
    SET_CURRENT_USER(state, newUser) {
      state.currentUser = newUser;
    },
  },
  actions: {
    traerTodosLosPacientes(context){
      Firebase.firestore()
      .collection("pacientes")
      .get()
      .then((collection) => {
        const pacientes = []
        collection.forEach((document) =>{
          pacientes.push({id: document.id, ...document.data() });
          //this.pacientes.push({id: document.id, ...document.data() });
        });

        context.commit("SET_PACIENTES", pacientes);
      });
      /* Firebase.firestore().collection("pacientes").onSnapshot((querySnapshop) => {
        this.pacientes = []
        querySnapshop.forEach(document => {
          this.pacientes.push({id: document.id, ...document.data() })
        })
      }) */
    },
    traerPaciente(context, idPaciente){
      Firebase.firestore()
      .collection("pacientes").doc(idPaciente).get()
      .then(document => {
        console.log(document.id)
        console.log(document.data())

        let paciente = document.data()
        paciente.id = document.id

        context.commit("SET_PACIENTE", paciente)
      })
    },
    editarPaciente(context, paciente){
      Firebase.firestore()
      .collection("pacientes").doc(paciente.id).update({
        nombre: paciente.nombre, apellido: paciente.apellido, edad: paciente.edad,  prevision: paciente.prevision, 
      })
      .then(() =>{
        console.log('paciente editado')
        router.push('/')
      })
    },
    agregarPaciente(context, paciente){
      Firebase.firestore()
      .collection("pacientes").add({
        nombre: paciente.nombre, 
        apellido: paciente.apellido, 
        prevision: paciente.prevision, 
        edad: paciente.edad
      })
      .then(doc => {
        console.log('paciente agregado')
        console.log(doc.id)
      })

      context.commit('ADD_PACIENTES', paciente)
    },
    eliminarPaciente(context,idPaciente){
      Firebase.firestore()
      .collection("pacientes").doc(idPaciente).delete()
      .then(() => {
        console.log('paciente eliminado')
        context.commit("ELIMINAR_PACIENTE", idPaciente);
      })
   
    },
    defineCurrentUser(context, user) {
      context.commit("SET_CURRENT_USER", user);
    },
  },
  modules: {},
});
