// second question answer
 let array1 =[ 7, 8 ,9,0,2 ];
 let time =array1.length;
 let item = +prompt("enter a number");
 
   function searcharr( array1,item){
    if( array1.length===0){
        return false;
    }
    else  if( array1[0]=== item) {
        return true;
    }  
    else{
        return searcharr(array1.slice(1), item);
    } 
    }
   
        
   
    let find =searcharr(array1,item);
     console.log(find); 
     
       // first question 
     function first (val1){
        return function (sec){
          console.log(val1+sec);
        }

     }
      let inerfun =first(5);
      let inerfun2 =first(6);
      inerfun(5);
      inerfun2(8);
      

      // qno 3
     let my = prompt("enter text for pargh");
     function addParagh (text){
        let newpara = document.createElement('p');
         
        newpara.textContent= text;
         
        let body =document.querySelector('body');

        body.appendChild(newpara);


     }
     // qno 4
     let my= prompt("add text");
    function addList(text){
         let newList =document.createElement('li');
        
         newList.textContent= text;
        
         let unoderList=document.querySelector('ul');
    
        unoderList.appendChild(newList)
    }
    
 // quesnt no 5
function changebackg(element , color){
     element.style.backgroundColor= color;
  console.log(element)
}
let myelement =document.querySelector('#element');
 changebackg(myelement, 'red');
 

 function savelocastorage( key ,object){
     
    let objectstring =JSON.stringify(object);

    localStorage.setItem(key,objectstring);
    console.log("added");
 }

 let myobject={
    name: "ali",
    age:14,
    city:"hyd"
 };
 savelocastorage('myintro',myobject);
 