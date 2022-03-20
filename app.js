
console.log("Hi iam Cat Clicker Game");
class CAT {
    constructor(id,name, counter,imgfile) {
      this.id=id;
      this.name = name;
      this.counter = counter;
      this.imgfile = imgfile;
    }
  }


let cats_array = defineCats();
buildCatList(cats_array);

function defineCats(){
    let  cat_array = new Array(3);
    cat_array[0] = new CAT('1',"Paples",0,"img/cat_1.jpg");
    cat_array[1]=new CAT('2',"Gawaher",0,"img/cat_2.jpg");
    cat_array[2]= new CAT('3',"Browmy",0,"img/cat_3.jpg");
     return cat_array;
    
};

//old way add div for each cat 
/*for (var i = 0; i < cats_array.length; i++) {
    let new_Cat_div = document.createElement('div'); 
    
    let new_cat_img = document.createElement('img');
    let new_cat_name = document.createElement('h1');
    let new_cat_Counter = document.createElement('h1');
    new_cat_Counter.innerText =0;
    const temp_cat =cats_array[i];
    new_Cat_div.setAttribute('id',temp_cat.id);
    new_cat_img.setAttribute("src", temp_cat.imgfile);
    new_cat_img.setAttribute("id", 'cat_'+temp_cat['id']+'_img' );
    new_cat_name.setAttribute("id",'cat_'+temp_cat['id']+'_Name');
    new_cat_name.innerText = temp_cat['name'];
    new_cat_Counter.setAttribute("id", 'cat_'+temp_cat['id']+'_Counter');

    new_Cat_div.appendChild(new_cat_img);
    new_Cat_div.appendChild(new_cat_name);
    new_Cat_div.appendChild(new_cat_Counter);

    document.body.appendChild(new_Cat_div);
}*/

function buildCatList(cat_arr){
    let nav_list = document.getElementById('navbar__list');
    const list_div = document.createElement('div');
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
            let cat_obj = cats_array.find((cat)=>cat.id==evt.target.getAttribute("cat_id")); 
            console.log(cat_obj);
            remove_Active_Cat();
            display_Active_cat(cat_obj);

        }
    });

    nav_list.appendChild(list_div);
}


function display_Active_cat(temp_cat){
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

}

function remove_Active_Cat(){
     const element = document.getElementById('active_cat');
     console.log(element);
     element.remove();
}

document.body.addEventListener('click',evt=>{
    if (evt.target.nodeName.toLowerCase()=== 'img'){
        console.log(evt.target.getAttribute("id"));
        const clicked_cat_img = document.getElementById(evt.target.getAttribute("id"));
        const cat_id=clicked_cat_img.parentElement.id
        let cat_obj = cats_array.find((cat)=>cat.id==cat_id); 
        console.log(cat_obj);
        cat_obj.counter++;
       const cat_Counter =  document.getElementById('cat_'+clicked_cat_img.parentElement.id+'_Counter');
       cat_Counter.innerText = cat_obj.counter;

    

    }  
   
});





