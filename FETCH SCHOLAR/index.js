const displayData = async () => {
    try{
        let res = await fetch ('https://fakestoreapi.com/products')
        
        let data =await res.json()
        console.log(data)

        let root = document.getElementById("root")
        data.forEach(({category, id, image, price})=>{
           let taskCard = document.createElement("div")
             taskCard.className = "taskCard"

           let  categoryElement = document.createElement('h1');
            categoryElement.innerText = `Cotegory : ${category}`;

            let idElement = document.createElement("p")
            idElement.innerText = `ID: ${id}`;

            let imageElement = document.createElement("img")
            imageElement.src = image;

            let priceElement = document.createElement("p")
            priceElement.innerText = `Price : ${price}`;

            taskCard.append(categoryElement, idElement, imageElement, priceElement)

            root.append(taskCard)

        })


    }
    catch(error){

    }
}

displayData()