var app = new Vue({
  el: '#app',
  data: {
    open: false,
    text: ' Merry ChirstMas and Happy New Year 2024!!! '
  },
  methods: {
    click: function() {
      this.open = !this.open;
    }
  },
  watch:{
    open: function() {
      if (this.open == true) {
          document.body.className = 'open';
          document.querySelector("#days").style.color = 'red';
          }
      else {
        document.body.className = '';
        document.querySelector("#days").style.color = 'white';
      }
    }
  }
})