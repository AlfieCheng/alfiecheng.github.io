Vue.component('m-dropdown',{
  props:['clips'],
  methods:{
    change(url){
      this.$emit('update', url);
    }
  },
  template:`
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <slot></slot>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li v-for="clip in clips"><a class="dropdown-item" @click.prevent="change(clip)">{{ clip.title }}</a></li>
      </ul>
    </div>
  `
});
