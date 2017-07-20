var itemArray = [0,0,0,0];
var priceArray = [0,0,0,0];

function addMilk(){//Each time the button is pushed 2.99 is added to itself then
 priceArray[0] += 2.99;//it is stored at index 0.
 itemArray[0] ++; //This does the same but with the actual number of items.
 alert("You have added " + itemArray[0] + " gallon(s) of Milk. Your Milk total is $" + priceArray[0] ) 
}

function addBacon(){//Does the same ass addMilk but with bacon at index 1
 priceArray[1] += 3.99;
 itemArray[1] ++; 
 alert("You have added " + itemArray[1] + " package(s) of Bacon. Your Bacon total is $" + priceArray[1] ) 
}

function addEggs(){
 priceArray[2] += 2.99;
 itemArray[2] ++; 
 alert("You have added " + itemArray[2] + " carton(s) of Eggs. Your Egg total is $" + priceArray[2] ) 
}

function addPizza(){
 priceArray[3] += 5.99;
 itemArray[3] ++; 
 alert("You have added " + itemArray[3] + " Pizza(s). Your Pizza total is $" + priceArray[3] ) 
}

function checkOut(){
  var reciept = "Reciept: \n";//Just a string that prints Reciept: 
  var sum = 0;//will be populated with with the for loop below
  
  //Loops through the price array to find the total amount
  for (var i = 0; i < priceArray.length; i++){//Will run the length of the priceArray
      sum = sum + priceArray[i];//sum gets updated each time the loop runs each index[i]
  }
  
  //If any of the items were added it will add to the reciept 
  if (itemArray[0] > 0){
    reciept += "\n" + itemArray[0] + " Milk -- " + priceArray[0];    
  }
  
  if(itemArray[1] > 0){
    reciept += "\n" + itemArray[1] + " Bacon -- " + priceArray[1];
  }
  
  if(itemArray[2] > 0){
    reciept += "\n" + itemArray[2] + " Eggs -- " + priceArray[2];
  }
  
  if(itemArray[3] > 0){
    reciept += "\n" + itemArray[3] + " Pizza -- " + priceArray[3];
  }
  
  var total = (sum * 1.06);//calculates the total
  var finalPrice = total.toFixed(2);//toFixed() regulates the number of decimal places
  
  alert(reciept + "\n Subtotal: " + sum + "\n Your total with tax is: " + finalPrice)
}//alert prints out the reciept