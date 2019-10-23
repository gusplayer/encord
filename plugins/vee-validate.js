import Vue from 'vue'
import es from 'vee-validate/dist/locale/es'
import VeeValidate, { Validator } from 'vee-validate'
// import VueI18n from 'vue-i18n';
// import validationMessages from 'vee-validate/dist/locale/en';

// Vue.use(VueI18n);

// const i18n = new VueI18n();

Validator.localize('es', es)
Vue.use(VeeValidate, { locale: 'es' })
