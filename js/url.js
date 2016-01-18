/*
URL
*/
var Url = {
    
    getQueryVariable: function(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i=0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return(false);
    },

    updateUrlWithoutReload: function(newUrl, newTitle, state) {
        if (history.pushState) {
            newTitle = newTitle ? newTitle : null;
            state = state ? state : null;
            history.pushState(state, newTitle, newUrl);
        }
    }

};