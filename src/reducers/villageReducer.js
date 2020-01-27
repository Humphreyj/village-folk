import { addVillager } from '../actions'

const initialState =  {
    
        name: 'New Village',
        population: 0,
        food: 10,
        wood: 10,
        stone: 10,
        gold: 10,
        villagers: 0,
        soldiers: 0,
        buildings: [
            {
                id: 0,
                name: 'Town Center',
                description: 'The center of town, can produce villagers and construct buildings.',
                actions: [
                    {
                        id: 0,
                        title: 'Create Villager',
                    }
                ]

            },
        ],
    
}

const rollDice = (num) => {
    let result =0;
    
     result = (Math.floor(Math.random() * num + 1));
    
    
    return result;
  }
  
  

export const villageReducer = (state = initialState, action) => {

    //I wanted to make it roll based so I set it up like this, I tried a switch statement, but this seemed to  be the best way.

    switch(action.type){    
            case 'CHOP_WOOD':
               let woodResult = rollDice(20);
               let woodResource;
               console.log(woodResult)
               if(woodResult === 20) {
                woodResource = rollDice(20)
                console.log('woodResource',woodResource)
                return{...state,wood: state.wood += woodResource};
               }else if(woodResult > 15) {
                woodResource = rollDice(12)
                console.log('woodResource',woodResource)
                return{...state,wood: state.wood += woodResource};
               }else if (woodResult > 10) {
                woodResource = rollDice(8)
                console.log('woodResource',woodResource)
                return{...state,wood: state.wood += woodResource};
               }else {
                   return {...state,wood: state.wood}
               }
               
            case 'MINE_STONE':
                let stoneResult = rollDice(20);
                let stoneResource;
                console.log(stoneResult)
                if(stoneResult === 20) {
                 stoneResource = rollDice(20)
                 console.log('stoneResource',stoneResource)
                 return{...state,stone: state.stone += stoneResource};
                }else if(stoneResult > 15) {
                 stoneResource = rollDice(12)
                 console.log('stoneResource',stoneResource)
                 return{...state,stone: state.stone += stoneResource};
                }else if (stoneResult > 10) {
                 stoneResource = rollDice(8)
                 console.log('stoneResource',stoneResource)
                 return{...state,stone: state.stone += stoneResource};
                }else {
                    return {...state,stone: state.stone}
                }
            case 'GATHER_FOOD':
                let foodResult = rollDice(20);
                let foodResource;
                console.log(foodResult)
                if(foodResult === 20) {
                 foodResource = rollDice(20)
                 console.log('foodResource',foodResource)
                 return{...state,food: state.food += foodResource};
                }else if(foodResult > 15) {
                 foodResource = rollDice(12)
                 console.log('foodResource',foodResource)
                 return{...state,food: state.food += foodResource};
                }else if (foodResult > 10) {
                 foodResource = rollDice(8)
                 console.log('foodResource',foodResource)
                 return{...state,food: state.food += foodResource};
                }else {
                    return {...state,food: state.food}
                }
            case 'CREATE_VILLAGER':
                if(state.food >= 10) {
                    return {...state,villagers: state.villagers += 1,
                            ...state,food: state.food - 10}
                            //Prices to be balanced in the future!
                }else {
                    alert('Not enough food!!')
                    return {...state,villagers: state.villagers}
                }

                case 'VILLAGER_GATHER_FOOD':
                    let villagerFoodResult = rollDice(20);
                    let villagerFoodResource;
                    console.log(villagerFoodResult)
                    if(villagerFoodResult === 20) {
                        villagerFoodResource = rollDice(8)
                        console.log('villagerFoodResource',villagerFoodResource)
                        return{...state,food: state.food += villagerFoodResource};
                    }else if(villagerFoodResult > 15) {
                        villagerFoodResource = rollDice(6)
                        console.log('villagerFoodResource',villagerFoodResource)
                        return{...state,food: state.food += villagerFoodResource};
                    }else if (villagerFoodResult > 10) {
                        villagerFoodResource = rollDice(4)
                        console.log('villagerFoodResource',villagerFoodResource)
                        return{...state,food: state.food += villagerFoodResource};
                    }else if(villagerFoodResult === 1) {
                        return{...state,villagers: state.villagers -= 1};
                    }else {
                        return {...state,food: state.food}
                    }

           
                

            default:
                return state;
    }


}