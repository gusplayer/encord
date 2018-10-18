import Vue from 'vue'
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
  Carousel,
  CarouselItem
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Row)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Radio)
Vue.use(Carousel)
Vue.use(CarouselItem)

locale.use(lang)
