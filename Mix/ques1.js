const spendings = [{
    id: 1,
    category: 'movie',
    amount: 100
},
{
    id: 2,
    category: 'shopping',
    amount: 200
}, {
    id: 3,
    category: 'movie',
    amount: 300
},
{
    id: 3,
    category: 'entertainment',
    amount: 150
},
{
    id: 4,
    category: 'shopping',
    amount: 250
},
{
    id: 5,
    category: 'leisure',
    amount: 350
}]

function getSpendsOnCategories(allSpends, categories) {
    var sum1 = 0;
    var sum2 =0
    for(var i =0; i < allSpends.length; i++){
        // console.log(allSpends[i].category)
        if(allSpends[i].category == categories[1]){
             sum2 = sum2 + allSpends[i].amount
        }
        if(allSpends[i].category == categories[0]){
            sum1 = sum1 + allSpends[i].amount
       }
       
    }
   
    console.log( categories[0] + ": " + sum1)
    console.log(categories[1] + ": " + sum2)
   
 
    
}

getSpendsOnCategories(spendings, ['movie', 'leisure'])