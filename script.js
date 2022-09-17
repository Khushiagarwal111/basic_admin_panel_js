
const url =
"https://admin-panel-data-edyoda-sourav.herokuapp.com/admin/data";
const myData = async(url)=>{
const res= await fetch(url);
console.log("async workingg")
return await res.json();
};
const fillDataInTable=()=>{
const response= myData(url);
response.then((response)=>{
        const tbody= document.querySelector('tbody');
        for(let data of response){
                    const trow= document.createElement("tr")
                     trow.classList.add("data-row");
                    const col1=document.createElement("td")
                    const col2=document.createElement("td")
                    const col3=document.createElement("td")
                    const col4=document.createElement("td")
                    const col5=document.createElement("td")
                     col1.classList.add('column1')
                    col1.innerHTML=data.id
                      col2.classList.add('column2')
                    col2.innerHTML=data.firstName
                      col3.classList.add('column3')
                    col3.innerHTML=data.lastName
                      col4.classList.add('column4')
                    col4.innerHTML=data.email
                       col5.classList.add('column5')
                    col5.innerHTML=data.phone
                    tbody.appendChild(trow)
                    trow.appendChild(col1)
                    trow.appendChild(col2)    
                    trow.appendChild(col3)
                    trow.appendChild(col4)
                    trow.appendChild(col5)

                    trow.addEventListener("click",()=>{
                      const previousElem= document.querySelector(".active")
                      console.log(previousElem)
                      if (previousElem) prev.classList.remove("active")
                      trow.classList.add("active")  
                      const user = document.querySelector("#user");
                      user.innerHTML = `${data.firstName}  ${data.lastName}`;
                      const desBox = document.querySelector("#desc");
                      desBox.innerHTML = data.description;
                      const add = document.querySelector("#addr");
                      add.innerHTML = data.address.streetAddress;
                      const city = document.querySelector("#city");
                      city.innerHTML = data.address.city;
                      const state = document.querySelector("#state");
                      state.innerHTML = data.address.state;
                      const zip = document.querySelector("#zip");
                      zip.innerHTML = data.address.zip;
                      const details = document.querySelector("#info-content");
                      details.style.display = "inline-block";
                 });
            }
  console.log(data)
       });
}

function search() {
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("search-box");
filter = input.value.toUpperCase();
table = document.getElementById("myTable");
tr = table.getElementsByTagName("tr");
for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[1];
  if (td) {
    txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
  }       
}
}
window.addEventListener("DOMContentLoaded",fillDataInTable)












