
console.log("Hi iam Cat Clicker Game");
class CAT {
    constructor(name, counter,imgfile) {
      this.name = name;
      this.counter = counter;
      this.imgfile = imgfile;
    }
  }


defineCats();

function defineCats(){
    var cats_array =[];
    let cat_1 = new CAT("Paples",0,"img/cat_1.jpg");
    let cat_2 = new CAT("Gawaher",0,"img/cat_2.jpg");
    let cat_3 = new CAT("Browmy",0,"img/cat_3.jpg");
    cats_array=[cat_1,cat_2,cat_3];
    return cats_array;
};


/*for (var i = 0; i < cats_array.length; i++) {
    let new_Cat_div = document.createElement('div'); 
    let new_cat_img = document.createElement('img');
    let new_cat_Counter = document.createElement('h1');
    new_cat_Counter.innerText =0;
    new_cat_img.setAttribute("src", "img/"+cats_array[i]);
    new_cat_img.setAttribute("id", cats_array[i] );
    new_cat_Counter.setAttribute("id", cats_array[i]+'_Counter');

    new_Cat_div.appendChild(new_cat_img);
    new_Cat_div.appendChild(new_cat_Counter);

    document.body.appendChild(new_Cat_div);
}




document.body.addEventListener('click',evt=>{
    if (evt.target.nodeName.toLowerCase()=== 'img'){
        console.log(evt.target.getAttribute("id"));
         const clickec_cat_img = document.getElementById(evt.target.getAttribute("id"));
        const clicked_cat_Counter = document.getElementById(evt.target.getAttribute("id")+'_Counter');
        console.log(clicked_cat_Counter);
        let counter  =clicked_cat_Counter.innerText;
        counter++;
        clicked_cat_Counter.innerText=counter;

    }  
   
});*/





