/*
Petition
*/
var Petition = {

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
        self.open_at__format = new Date(self.open_at);
        console.log(self);
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
        self.data = ko.observableArray([]);
        self.error = ko.observable('');

        self.getData = function(id, callback) {
            $.ajax({
                url: 'https://petition.parliament.uk/petitions/' + id + '.json',
                method: 'get',
                success: function(data) {
                    callback(data);
                },
                error: function(data) {
                    self.error('Could not retrieve data.');
                }
            });
        };

        self.createModel = function(data) {
            var petitionData = Petition.createModel(data);
            self.data(petitionData);
            self.doPoll();
        };

        self.doPoll = function() {
            setTimeout(function() {
                self.doGet();
            }, 3000 );
        };

        self.doGet = function() {
            self.getData(114003, self.createModel);
        };

        self.doGet();
    }

};
$(document).ready(PetitionList.init);
