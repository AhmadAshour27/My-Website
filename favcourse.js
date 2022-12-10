window.onload = setup
function setup(){
    let buttons = document.querySelectorAll(".but"); // selecting all the buttons
    
     buttons.forEach(btn=>{})
    for(let i=0; i<buttons.length; i++){
      buttons[i].addEventListener("click", addItem);  // adding event listener to buttons
    }
  }
  

  
  
  let addedItems = []; // to keep track of added items to wishlist 
  let wishList = [];  // actual wishlist
  
  function addItem(e){
      let item = "content" +e.target.id;
        // getting the id of the item
      
     
    
   if (!wishList.includes(item)){ // checking if item is already added or not
      wishList.push(item);
        var aside = document.querySelector("aside"); //Identyfing where the item will be displayed
        var content = document.getElementById(item).innerHTML; //Identifying the content of the item already displayed
        var asidecontent = aside.innerHTML; //Identyfing the content of the new variable
        aside.innerHTML = content + asidecontent ; //Identifying that the new variable is the previuosly selected item plus the newly selected item
   }


    else{
      alert("Course already in Favorite Courses.");  // alerting user if item is already added
      
 }
 
 
  
}


















  
  











    












  

  



  


  
  
