console.log('hello!')
function LoadClick(){
  fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot").then(function(response){
    return response.json()
  }).then(function(data){
    for(var item of data.photos){
        console.log(item.camera,"77")
       var tr=document.createElement("tr");
       var tdId=document.createElement("td");
       var tdImg=document.createElement('img');
       var tdCameraName=document.createElement('td');
       var tdRoverName=document.createElement('td'); 
       

   
       tdId.innerHTML=item.id;
       tdImg.src=item.img_src;
       tdImg.width="200";
       tdImg.height="200";
       tdImg.alt="Image Not Found";
       tdCameraName.innerHTML=item.camera.full_name;
       tdRoverName.innerHTML=item.camera.name
       tr.appendChild(tdId);
       tr.appendChild(tdImg)
       tr.appendChild(tdCameraName)
       tr.appendChild(tdRoverName)

      document.querySelector('tbody').appendChild(tr);
    }

  })
}