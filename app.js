//let response = fetch("https://restcountries.eu/rest/v2/all")
//console.log(response.json())
let data=[]
 let content = document.querySelector('#content')
    const getdata = async (link) => {
         //try{
            let response = await fetch(link)
            let resdata = await response.json()
            //console.log(data)
            return resdata

          // }
         //catch(exception){
         //   console.log(exception.message)
         // }
}
  content.innerHTML=`<div class="alert alert-success" role="alert">
  Still Loading Wait for a Moment ...
  </div>`
//content.innerHTML='still loading waiting for the moment'
getdata("https://restcountries.eu/rest/v2/all")
.then((e)=> {
    data = e
    //console.log(data);
      if (data === null || data === undefined || data.length === 0) {
            content.innerHTML = `<div class="alert alert-danger" role="alert">
            No Data
          </div>`
          }
          else {
              putData(data.slice(0,10))
          }
})
.catch((err)=> {
    console.log(err.message)
})
// document.querySelector('#search').addEventListener('input',(event)=>
// let finalData = data.filter((country) =>country.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
// if(finalData.length === o){
//     console.log(no data)
// }
const putData = (finalData) => {
  content.innerHTML = ''
  finalData.map((country) => content.innerHTML +=
`
      <div class="card mx-3 my-3" style="width: 18rem;">
      <div class="card-header text-center">
         ${country.alpha2Code}
      </div>
     <img src="${country.flag}" class="card-img-top border-light"> </img>
     <div class="card-body">
     <h5 class="card-tittle text-center">Name: ${country.name}</h5>
     <h5 class="lead">Capital: ${country.capital}</h5>
     <h5 class="lead">region: ${country.region}</h5>
     <h5 class="lead">Sub-Region: ${country.subregion}</h5>
     <h5 class="lead">Population: ${country.population}</h5>
     <h5 class="lead">timezones: ${country.timezones}</h5>
    <h5 class="lead">currency: ${country.currencies[0].name}</h5>

    
  </div>
 </div>
  `
)
}
document.querySelector('#search').addEventListener('input',(event)=>{
  let finalData = data.filter((country) =>country.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
  if(event.target.value === ''){
    finalData = finalData.slice(0,10)
  }
  if (finalData.length === 0) {
    content.innerHTML = `country not found/wront input`
}else{
     putData(finalData)
 }
})

// const putData = (finalData) =>{
//     content.innerHTML = ''
//     finalData.map((country) => content.innerHTML +=
//     `
//      <div class="card" style="width: 18rem;">
//      <div class="card-header text-center">
//         ${country.alpha2code}
//      </div>
//     <img src="${country.flag}" class="card-img-top"> </img>
//     <div class="card-body">
//     <h5 class="card-title">Name: ${country.name}</h5>
//     <h5 class="card-text">Capital: ${country.captial}</h5>
//     <h5 class="card-text">region: ${country.region}</h5>
//     <h5 class="card-text">Sub-Region: ${country.Subregion}</h5>
//     <h5 class="card-text">Population: ${country.Population}</h5>
//     <h5 class="card-text">timezones: ${country.timezones}</h5>
//     <h5 class="card-text">currency: ${country.currency}</h5>

    
//  </div>
// </div>
//  `
//      )
// }
// {
    
//     //console.log(finalData)
//     if (event.target.value === ''){
//         finalData = finalData.slice(0,10)
//     }
//     if (finalData.length === 0) {
//         content.innerHTML = `<div class="alert alert-danger" role="alert">
//         Country Not Found / Wrong User Input
//       </div>`
//     }else{
//         putData(finalData)
//     }
// })
const getIP = async() => {
  let myIP = await fetch('https://api.ipify.org/?format=json')
  let ipResult = await myIP.json()
  return ipResult
}
getIP().then(ip=>{
  document.querySelector('#ip').textContent = `Your IP is : ${ip.ip}`
  // document.querySelector('#ip').style.backgroundColor = "blue"
})
