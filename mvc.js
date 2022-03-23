class CAT {

    static cat_array = [];
    static current_Cat = null;
    constructor(id, name, counter, imgfile) {
        this.id = id;
        this.name = name;
        this.counter = counter;
        this.imgfile = imgfile;
    }

    static addcat(catobj) {
        CAT.cat_array.push(catobj);
        console.log(this.cat_array);
    }

    static getCatsList() {
        console.log(this.cat_array);
        return this.cat_array;

    }

    static clickCat() {

        this.current_Cat.counter++;
        console.log('cat clicked ' + this.current_Cat.name + ' counter =' + this.current_Cat.counter);
    }

    static findCat(id) {
        return this.cat_array.find((cat) => cat.id == id);

    }

    static updateCat(id, name, counter, imgpath) {
        let cat_obj = this.findCat(id);
        cat_obj.name = name;
        cat_obj.counter = counter;
        cat_obj.imgfile = imgpath;


    }

    static setActiveCat(id) {
        this.current_Cat = this.findCat(id);
    }

    static getActiveCat() {
        return this.current_Cat;

    }





}


class Controller {

    static addACat(Catobj) {
        CAT.addcat(Catobj);
    }

    static getCatsList() {
        return CAT.getCatsList();
    }

    static clickCat() {
        CAT.clickCat();
    }

    static findcat(id) {
        return CAT.findCat(id);
    }

    static setCurrentCat(id) {
        CAT.setActiveCat(id);

    }

    static getCurrentCat() {
        return CAT.getActiveCat();

    }


    static init() {
        Controller.addACat(new CAT('1', "Paples", 0, "img/cat_1.jpg"));
        Controller.addACat(new CAT('2', "Gawaher", 0, "img/cat_2.jpg"));
        Controller.addACat(new CAT('3', "Browmy", 0, "img/cat_3.jpg"));

        View.displayTheCatsList();
        View.showAdminPanel();
        View.init();

    }

    static updateCat() {
       let mycat = this.getCurrentCat();
        CAT.updateCat(mycat.id, View.getAdmin_newName(), View.getAdmin_newCounter(), View.getAdmin_newimg());

        View.displayTheCatsList();
        View.showAdminPanel();
        View.init();
        View.removeActiveCat();
        View.displayCat();
    }


}


class View {
    static displayTheCatsList() {
        let nav_list = document.getElementById('navbar__list');
        nav_list.innerHTML = '';
        const list_div = document.createElement('div');
        const cat_arr = Controller.getCatsList();
        for (let i = 0; i < cat_arr.length; i++) {
            console.log(cat_arr[i]);
            let newElement = document.createElement('li');
            newElement.setAttribute("id", 'li' + cat_arr[i]['id']);
            newElement.setAttribute('cat_id', cat_arr[i].id);
            newElement.textContent = cat_arr[i].name;
            list_div.appendChild(newElement);

        }
        list_div.addEventListener('click', evt => {
            if (evt.target.nodeName.toLowerCase() === 'li') {
                Controller.setCurrentCat(evt.target.getAttribute("cat_id"));
                View.removeActiveCat();
                View.displayCat();
            }
        });
        nav_list.appendChild(list_div);



    }

    static removeActiveCat() {
        const element = document.getElementById('active_cat');
        console.log(element);
        element.remove();
    }

    static displayCat() {

        const viewer = document.getElementById('viewer');
        let active_cat_div = document.createElement('div');
        active_cat_div.setAttribute('id', 'active_cat');

        let temp_cat = Controller.getCurrentCat();

        let new_Cat_div = document.createElement('div');
        let new_cat_img = document.createElement('img');
        let new_cat_name = document.createElement('h1');
        let new_cat_Counter = document.createElement('h1');
        new_Cat_div.setAttribute('id', temp_cat['id']);
        new_cat_img.setAttribute("src", temp_cat.imgfile);
        new_cat_img.setAttribute("id", 'cat_' + temp_cat['id'] + '_img');
        new_cat_name.setAttribute("id", 'cat_' + temp_cat['id'] + '_Name');
        new_cat_name.innerText = temp_cat['name'];
        new_cat_Counter.setAttribute("id", 'cat_' + temp_cat['id'] + '_Counter');
        new_cat_Counter.innerText = temp_cat['counter'];

        new_Cat_div.appendChild(new_cat_img);
        new_Cat_div.appendChild(new_cat_name);
        new_Cat_div.appendChild(new_cat_Counter);
        active_cat_div.appendChild(new_Cat_div);
       

        viewer.appendChild(active_cat_div);
        this.fillAdminPanel();
    }

    static showAdminPanel(catid) {

        const x = document.getElementById("admindiv");
        console.log(x);
        if (x.style.display == "none") {
            this.clearAdminPanel();
            this.fillAdminPanel();
            

            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    static clearAdminPanel() {
        document.getElementById("admin_catname").value = '';
        document.getElementById("admin_catimg").value = '';
        document.getElementById("admin_catcounter").value = '';
    }

    static fillAdminPanel(){
        const active_Cat = document.getElementById("active_cat");
            console.log(active_Cat.hasChildNodes());
            if (active_Cat.hasChildNodes() === false) return;

            const img_imput = document.getElementById("admin_catimg");
            const name_imput = document.getElementById("admin_catname");
            const counter_imput = document.getElementById("admin_catcounter");

            img_imput.value =Controller.getCurrentCat().imgfile;
            name_imput.value=Controller.getCurrentCat().name;
            counter_imput.value=Controller.getCurrentCat().counter;

    }

    static init() {
        document.body.addEventListener('click', evt => {
            if (evt.target.nodeName.toLowerCase() === 'img') {

                Controller.clickCat();
                let cat_obj = Controller.getCurrentCat();
                console.log(cat_obj);
                const cat_Counter = document.getElementById('cat_' + cat_obj.id + '_Counter');
                cat_Counter.innerText = cat_obj.counter;
            }

        });
    }

    static getAdmin_newimg(){
        const img_imput = document.getElementById("admin_catimg");
        return img_imput.value;

    }

    static getAdmin_newName(){
        const name_imput = document.getElementById("admin_catname");
        return name_imput.value;

    }

    static getAdmin_newCounter(){
        const counter_imput = document.getElementById("admin_catcounter");
        return counter_imput.value;

    }

    




}


Controller.init();




