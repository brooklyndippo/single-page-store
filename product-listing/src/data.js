import data from './data.json'

const inventory = data

const productCount = data.length

const allCategories = data.map( item => item.category)

//Set is an array-like object where every value has to be unique, will remove duplicates
//Array from will convert a set back into an array
const categories = Array.from(new Set(allCategories))


// const catCount = allCategories.map.filter(categories)

// const categoryCounts1 = categories.map(name => {
//     return {
//         name,
//         count: allCategories.filter(cat => cat === name).length
//     }
// })

var collection = [
    ["fruits","frozen","fresh","rotten"],
    ["apples",884,494,494],
    ["oranges",4848,494,4949],
    ["kiwi",848,33,33]
];


const categoryCounts = allCategories.reduce( (countObj, category) => {  
	if (countObj[category]) {    
		countObj[category] += 1;  
	} else {    
		countObj[category] = 1;  
	}    return countObj;
}, {});

const namesAndCategories = categories.map(name => {
    // return an object here with the name and count
    return {category: name, count: categoryCounts[name]}
});

export {
    productCount,
    categories,
    categoryCounts,
    namesAndCategories,
    inventory
}

export default data