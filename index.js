

var num = 0
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: []
  },
  methods: {
    addStudent: function () {
      num += 1
      this.todos.push({text:  + num + ' 名前：' + this.m1  + ' コース：' + this.m2 + ' 受講期：' + this.m3})
    }
  }
})