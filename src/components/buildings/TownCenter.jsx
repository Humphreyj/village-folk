import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addVillager, villagerGatherFood } from '../../actions';

const TownCenter = (props) => {
    let villagerIsgathering = null;

    const gather = (vari) => {
        vari = setInterval(props.vari,1000)
        
        console.log(vari)
    }

    const stop = (vari) => {
            console.log(villagerIsgathering)
        clearInterval(vari);
        vari = 0;
      }

    const villageMaker = () => {

          if(props.villagers === 0) {
            stop(villagerIsgathering);
        }else{
            gather(villagerIsgathering);
        }
    }
 
    useEffect(() => {

    villageMaker();

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
