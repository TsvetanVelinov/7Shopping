function shopping (input){

 let peterBudget = Number (input[0]);
 let videoCard = Number (input[1]);
 let processor = Number (input[2]);
 let ramMemory = Number (input[3]);

 let videoCardPrice = videoCard * 250 ;
 let processorPrice = (videoCardPrice * 0.35) * processor;
 let ramMemoryPrice = (videoCardPrice * 0.1) * ramMemory

 let totalPrice= videoCardPrice + processorPrice + ramMemoryPrice;


if (videoCard > processor){

    discount = totalPrice * 0.15;
    totalPrice = totalPrice - discount
} 

let difference = Math.abs(peterBudget-totalPrice);

if (peterBudget >= totalPrice){

    console.log(`You have ${difference.toFixed(2)} leva left!`);
} else {

    console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`);
}


}


shopping (["900","2","1","3"])
shopping (["920.45","3","1","1"])
