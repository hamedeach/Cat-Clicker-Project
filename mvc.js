class CAT {

    static cat_array = [];
    constructor(id,name, counter,imgfile) {
      this.id=id;
      this.name = name;
      this.counter = counter;
      this.imgfile = imgfile;
    }
    
    static addcat(catobj){
        CAT.cat_array.push(catobj);
        console.log(this.cat_array);
    }

    static getCatsList() {
        console.log(this.cat_array);
        return this.cat_array;

    }

   static clickCat(catobj){
    let mycat =  cat_array.find((cat)=>cat.id===catobj.id);
    mycat.counter++;
    console.log('cat clicked '+mycat.name+' counter ='+mycat.counter);
   }

   static findCat(id){
   return this.cat_array.find((cat)=>cat.id==id); 

   }
    

  }


class Controller {
    
   static addACat(Catobj) {
       CAT.addcat(Catobj);
    }

    static getCatsList(){
        return CAT.getCatsList();
    }

    static clickCat(catobj){
        CAT.clickCat(catobj);
    }

    static findcat(id){
        return CAT.findCat(id);
    }


    static init(){
       Controller.addACat(new CAT('1',"Paples",0,"img/cat_1.jpg"));
       Controller.addACat(new CAT('2',"Gawaher",0,"img/cat_2.jpg"));
       Controller.addACat(new CAT('3',"Browmy",0,"img/cat_3.jpg"));

       View.displayTheCatsList();

    }
    

}


class View{
    static displayTheCatsList(){
        let nav_list = document.getElementById('navbar__list');
        const list_div = document.createElement('div');
        const cat_arr = Controller.getCatsList();
        for (let i = 0; i < cat_arr.length; i++) {
            console.log(cat_arr[i]);
            let newElement = document.createElement('li');
            newElement.setAttribute("id", 'li'+cat_arr[i]['id'] );
            newElement.setAttribute('cat_id',cat_arr[i].id);
            newElement.textContent = cat_arr[i].name;
            list_div.appendChild(newElement);
    
        }
        list_div.addEventListener('click',evt=>{
            if (evt.target.nodeName.toLowerCase() === 'li') {
                let cat_obj = Controller.findcat(evt.target.getAttribute("cat_id"));
                console.log(cat_obj);
                View.removeActiveCat();
                View.displayCat(cat_obj);
            }
        });
        nav_list.appendChild(list_div);



    }

    static removeActiveCat(){
        const element = document.getElementById('active_cat');
        console.log(element);
        element.remove();
    }

    static displayCat(temp_cat){
        let active_cat_div = document.createElement('div'); 
    active_cat_div.setAttribute('id','active_cat');

    let new_Cat_div = document.createElement('div'); 
    let new_cat_img = document.createElement('img');
    let new_cat_name = document.createElement('h1');
    let new_cat_Counter = document.createElement('h1');
    new_Cat_div.setAttribute('id',temp_cat['id']);
    new_cat_img.setAttribute("src", temp_cat.imgfile);
    new_cat_img.setAttribute("id", 'cat_'+temp_cat['id']+'_img' );
    new_cat_name.setAttribute("id",'cat_'+temp_cat['id']+'_Name');
    new_cat_name.innerText = temp_cat['name'];
    new_cat_Counter.setAttribute("id", 'cat_'+temp_cat['id']+'_Counter');
    new_cat_Counter.innerText = temp_cat['counter']; 

    new_Cat_div.appendChild(new_cat_img);
    new_Cat_div.appendChild(new_cat_name);
    new_Cat_div.appendChild(new_cat_Counter);
    active_cat_div.appendChild(new_Cat_div);
    const viewer = document.getElementById('viewer');
    viewer.appendChild(active_cat_div);

    document.body.addEventListener('click',evt=>{
        if (evt.target.nodeName.toLowerCase()=== 'img'){
            console.log(evt.target.getAttribute("id"));
            const clicked_cat_img = document.getElementById(evt.target.getAttribute("id"));
            const cat_id=clicked_cat_img.parentElement.id
            let cat_obj =  Controller.findcat(cat_id);
            console.log(cat_obj);
            cat_obj.counter++;
           const cat_Counter =  document.getElementById('cat_'+clicked_cat_img.parentElement.id+'_Counter');
           cat_Counter.innerText = cat_obj.counter;
    
        
    
        }  
       
    });

    }

}


Controller.init();