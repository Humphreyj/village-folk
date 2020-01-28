import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addVillager, villagerGatherFood } from '../../actions';

const TownCenter = (props) => {
 

 
    
   const [interval, chooseInterval] = useState(0)
    useEffect(() => {

        


        if(props.villagers === 0) {
            // alert(getFood)
            clearInterval(interval);
            
            
        }else {
            chooseInterval(setInterval(props.villagerGatherFood,1000))
            console.log(interval) 
        }
           
            
        
        
       
       
  
    },[props.villagers])



    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <button onClick={props.addVillager}>Create Villager</button>
            
            
           
            
        </div>
        
    );
}

const mapStateToProps = state => {
    return {building: state.buildings,
            villagers: state.villagers}
}

export default connect(mapStateToProps,{addVillager,villagerGatherFood })(TownCenter);
