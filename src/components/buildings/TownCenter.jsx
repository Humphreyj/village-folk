import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addVillager, villagerGatherFood } from '../../actions';

const TownCenter = (props) => {
 

 
    
   const [interval, chooseInterval] = useState(0)
    useEffect(() => {

        


        if(props.villagers.length < ) {
            // alert(getFood)
            alert(props.villagers) 
            clearInterval(interval);
            
            
        }else {
            alert(props.villagers) 
            chooseInterval(setInterval(props.villagerGatherFood,1000))
            
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
