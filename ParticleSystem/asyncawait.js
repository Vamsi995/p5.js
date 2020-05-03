// function setup(){
//       noCanvas();
//       // setTimeout(sayHello,1000);
//       delay(1000).then((result)=>createP(result)).catch((err)=>console.error(err));
      
//       // delay('this').then(()=>createP('hello')).catch((err)=>console.error(err));
   
   
//    }

// //  function delayES8(time){

// //       delay(time);
// //       return;
// //    }
   
//    function delay(time){
//       return new Promise((resolve,reject)=>{
   
//          // if(isNaN(time)){
//          //    reject(new Error('delay requires a valid number'));
//          // }
//          setTimeout(()=>{
//             throw new Error('Whoops');
//          } ,time);
//       });  
//    }
   
//    function sayHello(){
//       createP('hello');
//    }




/*async function f(){
   // let promise =new Promise((resolve,reject)=>{
   //    reject(new Error('This is an error'));
   // });
throw new Error('not this error');
   await Promise.reject(new Error('this is an error'));
}

f().catch((x)=>console.error(x));*/

async function loadJson(url){
  
   let promise= await fetch(url);
   if(response.status==200){
      return response.json;
   }
   else  
      throw new Error(response.status);  
}

