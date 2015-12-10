/*
Petition
*/
var Petition = {

    get: function(id) {
        return $.ajax({
            url: 'https://petition.parliament.uk/petitions/' + id + '.json',
            method: 'get'
        });
    }
    
};