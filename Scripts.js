// let SteakSelector = document.getElementById("SteakButton");
// let RibsSelector = document.getElementById("RibsButton");
// let BurgerSelector = document.getElementById("BurgerButton");

// let Steak ={
//     name:"Steak",
//     calories:400,
//     price:15.99,
//     tax:15.99*0.06
// };

// let Ribs={
//     name:"Ribs",
//     calories:600,
//     price:18.99,
//     tax:18.99*0.06
// };

// let Burger={
//     name:"Burger",
//     calories:800,
//     price:12.99,
//     tax:12.99*0.06
// };



let FoodItemTemplate={
    name:"",
    calories:0,
    price:0,
    tax:0
}

let FoodItems = [];


//Constructs a new food item object and adds it to the array that contains all the current food items.
function FoodItemFactory(name, calories, price){
    let tax = price * 0.06;
    FoodItemTemplate={name, calories, price, tax};
    FoodItems.push(FoodItemTemplate);
    
}


FoodItemFactory("Steak", 400, 15.99, 15.99);
FoodItemFactory("Ribs", 600, 18.99, 18.99);
FoodItemFactory("Burger", 800, 12.99, 12.99);


let OrderList = document.getElementById("OrderItemHolder");
let SubTotal = document.getElementById("SubTotal");
let Tax = document.getElementById("Tax");
let Total = document.getElementById("Total");
let Calories = document.getElementById("Calories");

let SubTotalCurrentValue = Number(SubTotal.innerHTML);
let TaxCurrentValue = Number(Tax.innerHTML);
let TotalCurrentValue = Number(Total.innerHTML);
let TotalCalories = Number(Calories.innerHTML);

let OrderIterator = 1;



function FoodFactory(FoodItems){

    FoodItems.forEach(element => {
      
      
        //Dynamically select the element in the document
        let selector = document.getElementById(element.name+"Button");
        
        selector.addEventListener("click", function(){
            let li = document.createElement("li");
            console.log(element.name);
            li.appendChild(document.createTextNode(`${OrderIterator++}) ${element.name} \n`));
            OrderList.appendChild(li);

            SubTotalCurrentValue += element.price;
            TotalCalories += element.calories;
            TaxCurrentValue += element.tax;
            TotalCurrentValue += element.price + element.tax;
        
            SubTotal.innerHTML = "Subtotal: $" + SubTotalCurrentValue.toFixed(2);
            Tax.innerHTML = "Tax: $" + TaxCurrentValue.toFixed(2);
            Total.innerHTML = "Total: $" + TotalCurrentValue.toFixed(2);
            Calories.innerHTML = "Calories: " + TotalCalories;

        })

    });
};


FoodFactory(FoodItems);






// SteakSelector.addEventListener("click", function(){
    
//     console.log("Steak")
//     li.appendChild(document.createTextNode(`${OrderIterator++}) ${Steak.name}`));
//     OrderList.appendChild(li);
//     SubTotalCurrentValue += Steak.price;
//     TotalCalories += Steak.calories;
//     TaxCurrentValue += Steak.tax;
//     TotalCurrentValue += Steak.price + Steak.tax;

//     SubTotal.innerHTML = "Subtotal: $" + SubTotalCurrentValue.toFixed(2);
//     Tax.innerHTML = "Tax: $" + TaxCurrentValue.toFixed(2);
//     Total.innerHTML = "Total: $" + TotalCurrentValue.toFixed(2);
//     Calories.innerHTML = "Calories: " + TotalCalories;
// });

// RibsSelector.addEventListener("click", function(){
//     console.log("Ribs");
//     let li = document.createElement("li");
//     console.log("Ribs")
//     li.appendChild(document.createTextNode(`${OrderIterator++}) ${Ribs.name}`));
//     OrderList.appendChild(li);

//     SubTotalCurrentValue += Ribs.price;
//     TotalCalories += Ribs.calories;
//     TaxCurrentValue += Ribs.tax;
//     TotalCurrentValue += Ribs.price + Ribs.tax;

//     SubTotal.innerHTML = "Subtotal: $" + SubTotalCurrentValue.toFixed(2);
//     Tax.innerHTML = "Tax: $" + TaxCurrentValue.toFixed(2);
//     Total.innerHTML = "Total: $" + TotalCurrentValue.toFixed(2);
//     Calories.innerHTML ="Calories: " + TotalCalories;
// });

// BurgerSelector.addEventListener("click", function(){
//     let li = document.createElement("li");
//     console.log("Burger")
//     li.appendChild(document.createTextNode(`${OrderIterator++}) ${Burger.name}`));
//     OrderList.appendChild(li);
//     console.log("Burger")

//     SubTotalCurrentValue += Burger.price;
//     TotalCalories += Burger.calories;
//     TaxCurrentValue += Burger.tax;
//     TotalCurrentValue += Burger.price + Burger.tax;

//     SubTotal.innerHTML = "Subtotal: $" + SubTotalCurrentValue.toFixed(2);
//     Tax.innerHTML = "Tax: $" + TaxCurrentValue.toFixed(2);
//     Total.innerHTML = "Total: $" + TotalCurrentValue.toFixed(2);
//     Calories.innerHTML ="Calories: " + TotalCalories;
// });



