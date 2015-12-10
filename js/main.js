/*
Petition
*/
var Petition = {

    // get: function(id) {
    //     return $.ajax({
    //         url: 'https://petition.parliament.uk/petitions/' + id + '.json',
    //         method: 'get'
    //     });
    // },

    createModel: function(data) {
        return new Petition.Model(data);
    },

    Model: function(data) {
        var self = this;
        self.link = data.links.self.replace('.json', '');
        self.id = data.data.id;
        for (var key in data.data.attributes) {
            self[key] = data.data.attributes[key];
        }
    }
    
};

var PetitionList = {

    element: $('.ko-petition-list'),

    init: function() {
        if (PetitionList.element.length)
            PetitionList.koBind();
    },

    koBind: function() {
        ko.applyBindings(new PetitionList.ViewModel(), PetitionList.element[0]);
    },

    ViewModel: function() {
        var self = this;
        self.petitionData = ko.observableArray([]);

        self.getData = function(id, callback) {
            $.ajax({
                url: 'https://petition.parliament.uk/petitions/' + id + '.json',
                method: 'get',
                success: function(data) {
                    callback(data);
                }
            });
        };

        self.createModel = function(data) {
            var petitionData = Petition.createModel(data);
            self.petitionData(petitionData);
            console.log(self.petitionData());
            // self.id = petitionData.id;
            // self.petitionData = petitionData.attributes;
        };

        self.getData(114003, self.createModel);
    }

    // doGet: function(id) {
    //     Petition.get(id).then(function(data) {
    //         petitionData = Petition.createModel(data.data);
    //         PetitionList.renderData(petitionData);
    //     });
    // },

    // renderData: function(data) {
    //     for (var key in data) {
    //         $('[data-' + key + ']').text(data[key]);
    //     }
    //     // PetitionList.doPoll(data.id);
    // },

    // doPoll: function(id) {
    //     setTimeout(function() {
    //         PetitionList.doGet(id);
    //     }, 5000);
    // }

};
$(document).ready(PetitionList.init);
