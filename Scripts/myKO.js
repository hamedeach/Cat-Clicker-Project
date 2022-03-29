var CAT = function (id, name, path) {
    this.id = id;
    this.name = name;
    this.imgpath = path;
    this.clickcount = 0;
};

var ViewModel = function () {
    var self = this;
    self.cat_Array = ko.observableArray([]);

    function init() {
        self.cat_Array.push(new CAT('1', "Paples", "../img/cat_1.jpg"));
        self.cat_Array.push(new CAT('2', "Gawaher", "../img/cat_2.jpg"));
        self.cat_Array.push(new CAT('3', "Browmy", "../img/cat_3.jpg"));
    };

    init();

   

   

    self.setcurrentcat = function (catid) {
        console.log(catid);
        let clickedcat = ko.utils.arrayFirst(self.cat_Array(), function (item) {
            return item.id == catid;
        }) || null;

        this.currentCat = ko.observable(clickedcat).extend({notify: "always"});
        
        console.log("current cat is :" + self.currentCat().name);

    };

    this.setcurrentcat(1);

    self.incrementClick = function () {
        
        self.currentCat().clickcount++;
        console.log("counter : "+self.currentCat().clickcount)
    }




};

ko.applyBindings(new ViewModel());