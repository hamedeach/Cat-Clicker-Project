// Class to represent a row in the seat reservations grid
var CAT =function(id, name, imgpath){
     {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
        this.counter =ko.observable(0);
        this.imgpath = ko.observable(imgpath);
    }

   

}



// class is a function in JS
// create ViewModel Class to seperect and connect the model to tzhe View
var ViewModel=function() {
    var self =this;
   this.cat_array = ko.observableArray([]);
    this.current_Cat = ko.observable();

    function init() {    
        self.cat_array.push(new CAT('1', "Paples", "../img/cat_1.jpg"));
        self.cat_array.push(new CAT('2', "Gawaher", "../img/cat_2.jpg"));
        self.cat_array.push(new CAT('3', "Browmy", "../img/cat_3.jpg"));
    }
    init();

    function SetActiveCat(id) {
        console.log("set Active Cat...");
        self.current_Cat  = ko.utils.arrayFirst(this.cat_array(), function (item) {
            return item.id == id;
        });


    }

    function IncrementCounter() {


    }

};



class View {

    //static click_list(cat_id) {
    //    vm.SetActiveCat(cat_id);
  //  };

}
var vm = new ViewModel();
ko.applyBindings(vm);







