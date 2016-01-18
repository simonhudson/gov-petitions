/*
Petition
*/
var _s_Petition = {

    createModel: function(data) {
        return new _s_Petition.Model(data);
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

var PetitionDetails = {

    element: $('.ko-petition-detail'),
    searchId: null,

    init: function() {
        if (PetitionDetails.element.length) {
            PetitionDetails.searchId = $('#petition-search__q').val() ? $('#petition-search__q').val() : Url.getQueryVariable('id');
            PetitionDetails.koBind();
        }
    },

    koBind: function() {
        ko.applyBindings(new PetitionDetails.ViewModel(), PetitionDetails.element[0]);
    },

    ViewModel: function() {
        var self = this;
        self.data = ko.observableArray([]);
        self.error = ko.observable('');

        self.getData = function(callback) {
            $.ajax({
                url: 'https://petition.parliament.uk/petitions/' + PetitionDetails.searchId + '.json',
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
            var petitionData = _s_Petition.createModel(data);
            self.data(petitionData);
            self.doPoll();
        };

        self.doPoll = function() {
            setTimeout(function() {
                self.doGet();
            }, 3000 );
        };

        self.doGet = function() {
            self.getData(self.createModel);
        };

        self.doGet();
    }

};

var Petitions = {

    element: $('.ko-petition-list'),

    init: function() {
        if (Petitions.element.length)
            Petitions.koBind();
    },

    koBind: function() {
        ko.applyBindings(new Petitions.ViewModel(), Petitions.element[0]);
    },

    ViewModel: function() {
        var self = this;
        self.data = ko.observableArray([]);
        self.error = ko.observable('');

        self.getData = function(callback, limit, state) {
            state = state ? state : 'open';
            limit = limit ? limit : 10;
            $.ajax({
                url: 'https://petition.parliament.uk/petitions.json?state=' + state,
                method: 'get',
                success: function(data) {
                    callback(data, limit);
                },
                error: function(data) {
                    self.error('Could not retrieve data.');
                }
            });
        };

        self.createModel = function(data, limit) {
            for (var i in data.data) {
                self.data(data.data);
            }
            for (var i in self.data()) {
                console.log(self.data()[i]);
            }
            self.doPoll();
        };

        self.doPoll = function() {
            setTimeout(function() {
                self.doGet();
            }, 3000 );
        };

        self.doGet = function() {
            self.getData(self.createModel);
        };

        self.doGet();
    }

};
$(document).ready(Petitions.init);
$(document).ready(PetitionDetails.init);

$('#petition-search').on('submit', function() {
    Url.updateUrlWithoutReload('petition.php?id=123');
    Petition.init();
    return false;
});
