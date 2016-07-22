var app = angular.module('todo', []);

app.controller('homeController', home);

home.$inject = []

function home($timeout) {
  var vm = this;
  vm.message = 'Things to do:';
};
