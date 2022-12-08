var lightbox = {
  template: `
  <div class="lightbox">
    <div class="modal-mask" :style="modalStyle">
      <div class="modal-container"  @click.self="toggleModal">

        <div class="modal-body">
          <header>
            <slot name="header">Default Header</slot>
          </header>
          <hr>
          <main>
            <slot>Default Body</slot>
          </main>
          <hr>
          <footer>
            <slot name="footer">Default Footer</slot>
          </footer>
        </div>

      </div>
    </div>

    <button @click="isShow = true">Click Me</button>
  </div>`,
  data: () => ({
    isShow: false
  }),
  computed: {
    modalStyle() {
      return {
        'display': this.isShow ? '' : 'none'
      };
    }
  },
  methods: {
    toggleModal() {
      console.log('click')
      this.isShow = !this.isShow;
    }
  }
}
