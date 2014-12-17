'use strict';

app.controller('AuthCtrl', function($scope, $location, Auth, Profile, user) {
	if (user) {
		$location.path('/');
	}

	$scope.register = function() {
		console.log('Registering...');
		Auth.register($scope.user).then(function() {
			Auth.login($scope.user).then(function(authData) {
				Profile.create(authData.uid, $scope.user.username);
				$location.path('/');
			});
		}).catch(function(error) {
			$scope.error = error.toString();
		});
	};

	$scope.login = function() {
		Auth.login($scope.user).then(function() {
			$location.path('/');
		}).catch(function(error) {
			$scope.error = error.toString();
		});
	};
});
