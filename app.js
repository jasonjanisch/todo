var app = angular.module('todo', []);

app.controller('homeController', home);

home.$inject = []

function home($) {
  var vm = this;
  vm.todos = [
    { name: 'Cook dinner.'},
    { name: 'Return Dave\'s call'}
  ]
  vm.message = 'Things to do:';
};
