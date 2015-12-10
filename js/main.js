/*
Petition
*/
var Petition = {

    get: function(id) {
        return $.ajax({
            url: 'https://petition.parliament.uk/petitions/' + id + '.json',
            method: 'get'
        });
    },

    createModel: function(data) {
        return new Petition.Model(data);
    },

    Model: function(data) {
        var attributes = data.data.attributes;
        var self = attributes;
        console.log(self);
    }
    
};

Petition.get('114003').then(function(data) {
    Petition.createModel(data);
});
