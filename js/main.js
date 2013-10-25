App = Ember.Application.create();

App.Beer = Em.Object.extend({
    name: "",
    pct: null,
    desc: null,
    country: null,
    score: 0,
    hidden: false,
    expanded:false,
    matches: function(filter) {
        if(filter.length==0) { return true;}
        if(this.name.toLowerCase().indexOf(filter) !== -1) {
            return true;
        }
        return false;
    }
});

App.SearchTextField = Em.TextField.extend({
    valueBinding:"App.beersController.search",
    valueChanged:function() {
        console.log("change " + this.value);
        App.beersController.doFilter(this.value);
    }.observes("value")
});

App.BeerView = Em.View.create({
    templateName:'beer-grid',
    name:'test'
});

App.beersController = Em.ArrayController.create({
    content: [],
    allData: [],
    search: "",
    filterBeers: function() {
        this.doFilter();
    },

    init: function() {
        this.allData = addAllBeers();
        this.set('content',this.allData);
        this.doFilter(this.search);
    },
    doFilter:function(term) {
        var start = new Date().getTime();
        var tmp = [];
        console.log("filter " + term);
        for(var i=0; i < this.allData.length; ++i) {
            var beer = this.allData[i]
            beer.set('hidden',!beer.matches(term.toLowerCase()))

        }
        //this.set('content',tmp);
        var end = new Date().getTime();
        var time = end - start;
        console.log('Execution time: ' + time);
    }

});

