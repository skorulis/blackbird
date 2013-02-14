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
        this.allData.push(App.Beer.create({
            name:'Black Sheep Ale. ',
            pct:4.4,
            desc:'Black and average. ',
            score:2,
            img:'http://sphotos-b.ak.fbcdn.net/hphotos-ak-prn1/s720x720/485855_10151283325868745_1357546171_n.jpg
        }));

        this.allData.push(App.Beer.create({
            name:'Carlsberg. ',
            pct:4.0,
            desc:'',
            score:6,
            img:'http://sphotos-d.ak.fbcdn.net/hphotos-ak-prn1/s720x720/536444_10151283326338745_1988442948_n.jpg
        }));

        this.allData.push(App.Beer.create({
            name:'Amstel',
            pct:null,
            desc:'',
            score:8,
            img:'http://sphotos-g.ak.fbcdn.net/hphotos-ak-ash4/s720x720/1027_10151283326853745_295569657_n.jpg
        }));

        this.allData.push(App.Beer.create({
            name:'Websters. ',
        pct:null,
            desc:'Shit bloke, shit beer. ',
            score:1,
            img:'http://sphotos-a.ak.fbcdn.net/hphotos-ak-prn1/s720x720/65588_10151283327318745_1619592085_n.jpg
    }));

this.allData.push(App.Beer.create({
    name:'Hurlimann. Rather good',
    pct:null,
    desc:'',
    score:7,
    img:'http://sphotos-g.ak.fbcdn.net/hphotos-ak-snc7/s720x720/375874_10151283327863745_1299694311_n.jpg
}));

this.allData.push(App.Beer.create({
    name:'Kronenbourg. ',
    pct:5.0,
    desc:'Standard fare. ',
    score:6,
    img:'http://sphotos-g.ak.fbcdn.net/hphotos-ak-prn1/s720x720/60247_10151283328373745_1855333949_n.jpg
}));

this.allData.push(App.Beer.create({
    name:'Vedett. ',
    pct:null,
    desc:'',
    score:7,
    img:'http://sphotos-b.ak.fbcdn.net/hphotos-ak-ash4/s720x720/486956_10151296240913745_1196071675_n.jpg
}));

this.allData.push(App.Beer.create({
    name:'Rheinbacher. ',
    pct:null,
    desc:'',
    score:7,
    img:'http://sphotos-f.ak.fbcdn.net/hphotos-ak-ash3/s720x720/644125_10151296241128745_1291306382_n.jpg
}));

this.allData.push(App.Beer.create({
    name:'Veltins',
    pct:null,
    desc:'',
    score:7,
    img:'http://sphotos-g.ak.fbcdn.net/hphotos-ak-ash3/s720x720/32339_10151296241778745_603957055_n.jpg
}));

this.allData.push(App.Beer.create({
    name:'Samuel Smiths Extra stout .',
pct:4.5,
    desc:'Like Guinness with a taste of ashtray. ',
    score:4,
    img:'http://sphotos-c.ak.fbcdn.net/hphotos-ak-snc7/s720x720/317875_10151303867498745_1098897913_n.jpg
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
