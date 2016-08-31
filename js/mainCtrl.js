angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){

// $scope.test = "test";

$scope.quotes = dataService.getQuotes();

$scope.deleteMe = function(textToDelete){
  dataService.removeQuote(textToDelete);
}

$scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if(dataService.addQuote(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
}

})
