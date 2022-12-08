var comp = {
  props: ['parent-msg'],
  data() {
    return {
      subject: "Test component",
      msg : "this is child Component"
    }
  },
  template: `
  <div id='container'>
    <div> parent message: {{ parent-msg }}</div>
    <div> local message: {{ msg }} </div>
  </div>
  `
}
