var app = angular.module('todo', []);

app.controller('homeController', home);

home.$inject = []

function home() {
  var vm = this;
  vm.todos = [
    { name: 'Cook dinner.', checked: true },
    { name: 'Return Dave\'s call.', checked: false }
  ]
  vm.message = 'Things to do: ';
};
