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

var Petition = {

    element: $('.ko-petition-list'),

    init: function() {
        if (Petition.element.length) {
            var id = $('#petition-search__q').val();
            Petition.koBind(id);
        }
    },

    koBind: function(id) {
        ko.applyBindings(new Petition.ViewModel(id), Petition.element[0]);
    },

    ViewModel: function(id) {
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
            self.getData(id, self.createModel);
        };

        self.doGet();
    }

};
$('#petition-search').on('submit', function() {
    Petition.init();
    return false;
});
