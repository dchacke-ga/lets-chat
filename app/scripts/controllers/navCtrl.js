'use strict';

app.controller('NavCtrl', function($scope, Auth) {
	$scope.signedIn = Auth.signedIn;

	$scope.logout = function() {
		console.log('Logging out...');
		Auth.logout();
	};
});
