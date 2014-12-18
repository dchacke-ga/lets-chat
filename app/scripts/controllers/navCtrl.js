'use strict';

app.controller('NavCtrl', function($scope, $location, Auth) {
	$scope.signedIn = Auth.signedIn;

	$scope.logout = function() {
		console.log('Logging out...');
		Auth.logout();
		$location.path('/sessions/new');
	};
});
