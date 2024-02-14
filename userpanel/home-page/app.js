// console.log(firebase)
var categoryCard = document.getElementById("categoryCard")

async function getallcategory() {
    await firebase.database().ref("category").get()
        .then((snap) => {
            console.log(snap.val())
            var categoryData = Object.values(snap.val())
            console.log(categoryData)
            for (var data of categoryData) {
                console.log(categoryData)
                categoryCard.innerHTML += `
                <div class="col col-lg-4 col-md-" >
                <div class="card" style="">
                    <img src=${data["categoryimage"]} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${data["categoryname"]}</h5>
                      
                      <a href="#" class="btn btn-primary">ORDER NOW</a>
                    </div>
                  </div>
            </div> `
            }
        })
        .catch((e) => {
            console.log(e)
        })
}

getallcategory()