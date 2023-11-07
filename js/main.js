var BNameInpute=document.getElementById("BNameId");
var WebUrlInput=document.getElementById("WebUrlId");
var ma5zan=[];

var select=document.querySelectorAll(".alert");

if(localStorage.getItem("store")!=null){
    ma5zan=JSON.parse(localStorage.getItem("store"))
    display();
}


function addBook(){

    var oneBook={
        BName:BNameInpute.value, 
        WebUrl:WebUrlInput.value
    }
   
    if(BNameInpute.value!==""&&WebUrlInput.value!==""){
        select.forEach(item=>{
            item.style.display="none"
         })
        ma5zan.push(oneBook);
    localStorage.setItem("store",JSON.stringify(ma5zan))
    display()
    clearInputs()
    }else{
        select.forEach(item=>{
           item.style.display="block"
        })
       
    }

    

}



function display(){
    var hasala= "";

    for(i=0;i<ma5zan.length;i++){
        hasala+=`
          <div class="col-md-5"> <span class="fs-4 px-5  text-start">${ma5zan[i].BName}</span></div>
          <div class="col-md-5">
          <a href="${ma5zan[i].WebUrl}" class="btn btn-primary">visit</a>
          <button class="btn btn-danger" onclick="deleteBook(${i})">delete</button>
          </div>
        `
    }
    document.getElementById("khalid").innerHTML=hasala;
}
 


function deleteBook(Bindex){
   ma5zan.splice(Bindex,1) 
   localStorage.setItem("store",JSON.stringify(ma5zan))
   display();
}

function clearInputs(){
    BNameInpute.value="";
    WebUrlInput.value="";
}

