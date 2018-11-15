import Vue from 'vue';
import {
  Input,
  Select,
  Option,
  Row,
  Col,
  DatePicker,
  ButtonGroup,
  Button,
  Radio,
  RadioGroup,
  RadioButton,
  TableColumn,
  Tag,
  Table,
  Loading
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Row);
Vue.use(Col);
Vue.use(DatePicker);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Radio);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tag);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;

locale.use(lang);
