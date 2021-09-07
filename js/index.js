const write_icon = document.getElementById("write");
const write_input = document.getElementById("input");
const book = document.getElementsByClassName("list")[0];
const clear_btn = document.getElementsByClassName("clear_btn")[0];

function showData(data){
  book.innerHTML = "";
  for(list in data){
      setElement(data[list],list)
    }
}

function setElement(text,id){
  book.innerHTML += `
    <li class="line_field">
     <div class="text">${text}</div>
     <div class="easer">
       <i class="fas fa-eraser" onclick="deleteList(${id},this)"></i>
     </div>
  </li>`
}

function setLocalStorage(data){
  
  const localstorage = localStorage.getItem("New");
  
  if(localstorage == null){
    
     listItem = [];
     
  }else{
    
     listItem = JSON.parse(localstorage);
  }
  
  listItem.push(data);
  
  localStorage.setItem("New",JSON.stringify(listItem));
  
  return JSON.parse(localStorage.getItem("New"));
}

function newList(){
  
  const new_list = input.value;
  
  if(new_list.trim() == ''){
    return
  }
   
  const data = setLocalStorage(new_list);
  
  setElement(new_list,data.length);
  
  input.value = "";
}

function Enter(){
  const new_list = input.value;
  
  if(new_list.trim() == ''){
    return
  }
  
  if (event.keyCode === 13) {
    
    const data = setLocalStorage(new_list);
    
    setElement(new_list,data.length);
    
    input.value = "";
  }
}

function deleteList(index,e){
 
   const localstorage = localStorage.getItem("New");

   const listItem = JSON.parse(localstorage);
   
   listItem.splice(index,1);
   
   localStorage.setItem("New",JSON.stringify(listItem));
   
   e.parentElement.offsetParent.style.display = "none";
   
   /*update list index buz index need update*/
   showData(JSON.parse(localStorage.getItem("New")))
 }

showData(JSON.parse(localStorage.getItem("New"))); 

write.addEventListener("click",newList);
input.addEventListener("keyup",Enter);
clear_btn.addEventListener("click",()=>{
  
  localStorage.clear();
  book.innerHTML= "";
  
  
})