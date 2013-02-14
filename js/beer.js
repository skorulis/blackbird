function addAllBeers() {
    var ret = [];
    ret.push(App.Beer.create({
        name:'Black Sheep Ale. ',
        pct:4.4,
        desc:'Black and average. ',
        score:2,
        img:'http://sphotos-b.ak.fbcdn.net/hphotos-ak-prn1/s720x720/485855_10151283325868745_1357546171_n.jpg'
    }));

    ret.push(App.Beer.create({
        name:'Carlsberg. ',
        pct:4.0,
        desc:'',
        score:6,
        img:'http://sphotos-d.ak.fbcdn.net/hphotos-ak-prn1/s720x720/536444_10151283326338745_1988442948_n.jpg'
    }));

    ret.push(App.Beer.create({
        name:'Amstel',
        pct:null,
        desc:'',
        score:8,
        img:'http://sphotos-g.ak.fbcdn.net/hphotos-ak-ash4/s720x720/1027_10151283326853745_295569657_n.jpg'
    }));

    ret.push(App.Beer.create({
        name:'Webster\'s. ',
        pct:null,
        desc:'Shit bloke, shit beer. ',
        score:1,
        img:'http://sphotos-a.ak.fbcdn.net/hphotos-ak-prn1/s720x720/65588_10151283327318745_1619592085_n.jpg'
    }));

    ret.push(App.Beer.create({
        name:'Hurlimann. Rather good',
        pct:null,
        desc:'',
        score:7,
        img:'http://sphotos-g.ak.fbcdn.net/hphotos-ak-snc7/s720x720/375874_10151283327863745_1299694311_n.jpg'
    }));

    ret.push(App.Beer.create({
        name:'Kronenbourg. ',
        pct:5.0,
        desc:'Standard fare. ',
        score:6,
        img:'http://sphotos-g.ak.fbcdn.net/hphotos-ak-prn1/s720x720/60247_10151283328373745_1855333949_n.jpg'
    }));

    ret.push(App.Beer.create({
        name:'Vedett. ',
        pct:null,
        desc:'',
        score:7,
        img:'http://sphotos-b.ak.fbcdn.net/hphotos-ak-ash4/s720x720/486956_10151296240913745_1196071675_n.jpg'
    }));

    ret.push(App.Beer.create({
        name:'Rheinbacher. ',
        pct:null,
        desc:'',
        score:7,
        img:'http://sphotos-f.ak.fbcdn.net/hphotos-ak-ash3/s720x720/644125_10151296241128745_1291306382_n.jpg'
    }));

    ret.push(App.Beer.create({
        name:'Veltins',
        pct:null,
        desc:'',
        score:7,
        img:'http://sphotos-g.ak.fbcdn.net/hphotos-ak-ash3/s720x720/32339_10151296241778745_603957055_n.jpg'
    }));

    ret.push(App.Beer.create({
        name:'Samuel Smith\'s Extra stout .',
        pct:4.5,
        desc:'Like Guinness with a taste of ashtray. ',
        score:4,
        img:'http://sphotos-c.ak.fbcdn.net/hphotos-ak-snc7/s720x720/317875_10151303867498745_1098897913_n.jpg'
    }));

    return ret
}
