let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");


btn.addEventListener("click", async () =>{
    let country = document.querySelector("input").value;
    console.log(country);
    // now as soon as the user clicks on the button we will call the getCollege function 
    let collArr = await getColleges(country); // this will return all the data about the colleges
    console.log(collArr);

    Show(collArr);
});


function Show(collArr){
    let list = document.querySelector("#list");
    list.innerText= "";
    
    for(col of collArr){
        console.log(col.name);
        let li =  document.createElement("li");
        li.innerText= col.name;
        list.appendChild(li);
    }

}



async function getColleges(country){
    try{
       let result =  await axios.get(url + country); // // here we are getting both url and country using concatinating
        // console.log(result);
        // now if we want only the data then :
         return (result.data)
    }catch(error){
        console.log("error",error);
        return []; // returning empty error if erro comes 

    }
}


console.log(getColleges());
