import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import store from '../../store';
import titleMixin from '@/mixins/titleMixin';
import "../../firebaseConfig"
import firebase from 'firebase'
import VueRouter from 'vue-router'
import Routes from '../../routes/loginRoutes'

Vue.mixin(titleMixin)
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes
})

let app;
firebase.auth().onAuthStateChanged(function(){
  if(!app) {
    app = new Vue({
      vuetify,
      store,
      router: router,
      render: h => h(App)
    }).$mount('#app')
  }
})
