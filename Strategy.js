window.onload = function() {
    var routes = {
        'signup': function(name) {
            return name + ' sign up successfully';
        },
        'login': function(name) {
            return name + ' login successfully'
        },
        'logout': function(name) {
            return name + ' logout successfully'
        }
    }
    var path = 'login';
    var action = function(name) {
        return routes[path](name);
    }
    console.log(action('irish'));
}
