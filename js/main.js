App = Ember.Application.create();

App.ApplicationController = Em.Controller.extend({
    firstName: "Trek",
    lastName: "Glowacki",
    beers:beerList
});

App.Beer = Em.Object.extend({
    name: null,
    pct: null,
    desc: null,
    country: null,
    score: 0,
    matches: function(filter) {
        if(filter.length==0) { return true;}
        if(this.name.toLowerCase().contains(filter)) {
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
        this.allData.push(App.Beer.create({
            name: 'Amstel',
            pct: '4.6',
            desc: 'Amstel description',
            country:'Netherlands',
            score: 8,
            img:"http://sphotos-g.ak.fbcdn.net/hphotos-ak-ash4/s720x720/1027_10151283326853745_295569657_n.jpg"
        }));

        this.allData.push(App.Beer.create({
            name: 'Black Sheep Ale',
            pct: '4.4',
            desc: 'Black and average',
            country:'Netherlands',
            score: 2,
            img:"http://sphotos-b.ak.fbcdn.net/hphotos-ak-prn1/s720x720/485855_10151283325868745_1357546171_n.jpg"
        }));

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
