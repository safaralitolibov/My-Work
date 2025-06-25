let box=document.querySelector(".box");
///Knopkahoi add 
let inputimg=document.querySelector(".inputimg");
let inputname=document.querySelector(".inputname");
let inputjob=document.querySelector(".inputjob");
let add=document.querySelector(".add");
///Knopkaxoi dialog Edit 
let inputimgEdit=document.querySelector(".inputimgEdit");
let inputnameEdit=document.querySelector(".inputnameEdit");
let inputjobEdit=document.querySelector(".inputjobEdit");
let addEdit=document.querySelector(".addEdit");

let dialog=document.querySelector(".dialog")
let Close=document.querySelector(".Close")


let data= [
  {
    id: 1,
    name: "Jons Jons",
        about: "I choose product design because i love seeing beautiful interfaces and to be able to solve user's problems.",
        contact: "Contact",
        icon: "https://cdn.xabardor.uz/media/photo/2025/05/22/news_photo-20250622-114529.webp",
          job: "Product Deesign Track",
          status: false,
  },
   {
    id: 2,
   name: "Jons Jons",
    about: "I choose product design because i love seeing beautiful interfaces and to be able to solve user's problems.",
     contact: "Contact",
          icon: "https://cdn.xabardor.uz/media/photo/2025/05/22/news_photo-20250622-114529.webp",
          job: "Product Deesign Track",
           status: false,
  },
   {
    id: 3,
    name: "Jons Jons",
        about: "I choose product design because i love seeing beautiful interfaces and to be able to solve user's problems.",
          contact: "Contact",
           icon: "https://cdn.xabardor.uz/media/photo/2025/05/22/news_photo-20250622-114529.webp",
         job: "Product Deesign Track",
          status: false,
  },

     

];
   
 /// Funcsiya baroi inputho 
add.onclick=()=> {
  let user= {
    id: new Date (). getTime(),
    name:inputname.value,
    icon:inputimg.value,
    job:inputjob.value,
  }
  data.push(user);
  console.log(user)
  get()
  inputname.value ="" ;
  inputimg.value= "" ;
  inputjob.value= "" ;
}; 

///Funcsiya baroi Delate
function delateeser (id){
  console.log(id)   /// Baroi brauser
 data=  data.filter((elem)=>{
    return elem.id !=id;

  })
  get()  ///Functionro davat mekunem 
  console.log(data); /// Baroi Udalit 
}

//// function baroi checkbox;
function compieapEser(id) {
  data.map((e)=>{
    if (e.id==id){
      e.status=!e.status;
    }
    return e;
  })
  get ()
}

///Vaqqte Mo oncklikro (Close) zer kardem boyad Editi mo maxkam shavad
Close.onclick= ()=>{
  dialog.close();
}

 ///Function baroi Editi malumot  
 let idx=null;
 function openModal (elem){
  dialog.showModal();
  idx=elem.id;
  inputimgEdit.value=elem.icon;
  inputnameEdit.value=elem.name;
  inputjobEdit.value=elem.job;

 }

  /// function 2 yumi Edit baro dob kardani malumot
  function edit() {
    data= data.map((e)=>{
      if(e.id==idx){
        e.name=inputnameEdit.value;
        e.icon=inputimgEdit.value;
        e.job=inputjob.value;
      }
      return e;
    })
    get()
  }

  ///knopka baroi vaqte mo izmenit kardem malummotro okno boyad xudash maxkam shavad 
  addEdit.onclick= ()=>{
    edit();
    dialog.close();
  }

/// Glavniy function

function get (){
  /// Baroi functiona xoli cardan
  box.innerHTML="";
   data.forEach((elem)=>{
   let card=document.createElement("div");
   card.classList.add("card");
   card.style.width="100%";
  
    let img=document.createElement("img");
    img.src=elem.icon;
    img.alt= "icon";
     
    let div=document.createElement("div");
    div.classList.add("container")

       let h4=document.createElement("h4");
   h4.innerHTML=elem.name;

 
   

     let p=document.createElement("p");
   p.innerHTML=elem.job;

    let text=document.createElement("h6");
    text.innerHTML=elem.about;

    let text2=document.createElement("h2");
    text2.innerHTML=elem.contact;

   let btnBox = document.createElement("div");
    btnBox.style.display = "flex";
      btnBox.style.justifyContent = "center";

    btnBox.style.gap = "10px";
    btnBox.style.marginTop = "10px";

   /// knopka baroi Udalit bo onclick
   let buttondelat= document.createElement("button");
   buttondelat.style.background="#800080";
    buttondelat.style.border="#800080";
   buttondelat.style.color="white";
   buttondelat.innerHTML= " Delate User"; 
   buttondelat.onclick = ()=>{
     delateeser(elem.id)
   }
    

      let edit= document.createElement("button");
       edit.style.background="#FFA500"
        edit.style.border ="#FFA500"
   edit.style.color="white"
   edit.innerHTML= " Edit Profi"; 
   edit.onclick = ()=>{
    dialog.showModal();
    openModal(elem);
   }


    btnBox.append(buttondelat,edit);
    div.append(h4,p,text,text2,btnBox);
   card.append(img,div);
   box.append(card)

  
   });

}
get();