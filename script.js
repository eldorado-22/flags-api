const hero = document.querySelector(".hero")
const input = document.querySelector("input")
const btn = document.querySelector("button")
const select = document.querySelector("select")

// https://restcountries.com/v3.1/all
// https://restcountries.com/v3.1/name/{name}
let all = null
function getAPI(API) {
    axios(`https://restcountries.com/v3.1/${API}`)
        .then((res) => {
            console.log(res.data)
            view(res.data)
        })
}
getAPI("all")
function view(data) {
    window.scroll(0, 0)
    hero.innerHTML = ""
    data.map(el => {
        hero.innerHTML += `<div class="box">
<img src="${el.flags.svg}" alt="img" width="160">
<h4>${el.name.common}</h4>
<h5>${el.region}</h5>
<h6>${el.population}</h6>
<h6>${el.area} KB<sup>2</sup></h6>

</div>`
    })
}

btn.addEventListener("click", () => {
    getAPI(`name/${input.value}`)
})
input.addEventListener("input", (e) => {
    getAPI(`name/${e.target.value}`)
})
select.addEventListener("change", (e) => {
    let target = e.target.value
    if (target === "asia"){
        const res = all.filter()
    }
})
