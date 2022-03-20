console.log("Hi iam Cat Clicker Game");


const cat_1_Img_ID="cat_1_img";
const cat_1_Counter_ID="cat_1_Counter";

const cat_2_Img_ID="cat_2_img";
const cat_2_Counter_ID="cat_2_Counter";

let cat_1_Click_Counter =0;
let cat_2_Click_Counter =0;


const cat_1_Img_element =  document.getElementById(cat_1_Img_ID);
const cat_2_Img_element =  document.getElementById(cat_2_Img_ID);

const counter_cat_1_element =  document.getElementById(cat_1_Counter_ID);
const counter_cat_2_element =  document.getElementById(cat_2_Counter_ID);

document.body.addEventListener('click',event=>{
    if (event.target === cat_1_Img_element){
        click_theCat_1();
    }  
    else if (event.target === cat_2_Img_element){
        click_theCat_2();
    }
});



function click_theCat_1(){
    cat_1_Click_Counter++;
    updateTheDisplayedCounter();
};

function click_theCat_2(){
    cat_2_Click_Counter++;
    updateTheDisplayedCounter();
};


function updateTheDisplayedCounter(){
    
    counter_cat_1_element.innerText=cat_1_Click_Counter;
    counter_cat_2_element.innerText = cat_2_Click_Counter;
}