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
        var self = this;
            self.id = data.id;
            self.title = data.attributes.action;
            self.sigCount = data.attributes.signature_count;
    }
    
};

var PetitionList = {

    element: $('.ko-petition-list'),

    init: function() {
        if (PetitionList.element.length)
            PetitionList.doGet('114003');
    },

    doGet: function(id) {
        Petition.get(id).then(function(data) {
            petitionData = Petition.createModel(data.data);
            PetitionList.renderData(petitionData);
        });
    },

    renderData: function(data) {
        for (var key in data) {
            $('[data-' + key + ']').text(data[key]);
        }
        PetitionList.doPoll(data.id);
    },

    doPoll: function(id) {
        setTimeout(function() {
            PetitionList.doGet(id);
        }, 1000);
    }

};
$(document).ready(PetitionList.init);
