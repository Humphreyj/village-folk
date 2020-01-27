export const gatherWood = () => {
    return {type: 'CHOP_WOOD'}
}

export const gatherStone = (item) => {
    return {type: 'MINE_STONE', payload: item}
}

export const gatherFood = (item) => {
    return {type: 'GATHER_FOOD', payload: item}
}

export const addVillager = () => {
    return { type: 'CREATE_VILLAGER'}
}

export const villagerGatherFood = () => {
    return { type: 'VILLAGER_GATHER_FOOD' }
}