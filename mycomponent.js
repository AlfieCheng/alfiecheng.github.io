var mycomponent = {
  props: ['parentMsg'],
  data() {
    return {
      subject: "Test component",
      msg : "this is mycomponent Component"
    }
  },
  template: `
  <div id='container'>
    <div> parent message: {{ parentMsg }}</div>
    <div> local message: {{ msg }} </div>
  </div>
  `
}
