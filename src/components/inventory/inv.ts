import Vue from 'vue'
import {
  Component as comp,
  Prop as prop
} from 'vue-property-decorator'

let listColumns = []
let listDetailsColumns = []

@comp({
})
class List extends Vue {

}

@comp({
})
class Editor extends Vue {

}

export {
  List,
  Editor
}