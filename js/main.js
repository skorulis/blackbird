App = Ember.Application.create();

App.Beer = Em.Object.extend({
    name: "",
    pct: null,
    desc: null,
    country: null,
    score: 0,
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

App.beersController = Em.ArrayController.create({
    content: [],
    allData: [],
    search: "",
    filterBeers: function() {
        this.doFilter();
    },

    init: function() {
        this.allData = addAllBeers();
        this.doFilter(this.search);
    },
    doFilter:function(term) {
        var tmp = [];
        console.log("filter " + term);
        for(var i=0; i < this.allData.length; ++i) {
            if(this.allData[i].matches(term.toLowerCase())) {
                tmp.push(this.allData[i]);
                console.log("Adding " + this.allData[i].name);
            } else {
                console.log("Skipping ");
            }
        }
        this.set('content',tmp);
    }

});





console.log(beerList);
