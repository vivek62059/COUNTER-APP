const countValue=document.querySelector('#counter');
const increment = () =>{
    //get the value from ui
   let value=parseInt(countValue.innerText);
   value=value+1;
   //update the value
   countValue.innerText=value;
};
const decrement = () => {
    let value=parseInt(countValue.innerText);
    value=value-1;
    //update the value
    countValue.innerText=value;

};