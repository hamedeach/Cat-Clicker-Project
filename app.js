
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

function defineCats(){
    let  cat_array = new Array(3);
    cat_array[0] = new CAT('1',"Paples",0,"img/cat_1.jpg");
    cat_array[1]=new CAT('2',"Gawaher",0,"img/cat_2.jpg");
    cat_array[2]= new CAT('3',"Browmy",0,"img/cat_3.jpg");
     return cat_array;
    
};


for (var i = 0; i < cats_array.length; i++) {
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





