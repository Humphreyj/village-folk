import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const VillageStats = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border: 3px inset black;
font-family: 'Uncial Antiqua', cursive;

.population {

}

.resources {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p {
        margin: 1em;
    }
}

`


const VillageStatus = (props) => {
    return (
        <VillageStats>
            <div className="population">
                <p>Villagers: {props.villagers.length}</p>
            </div>
            <div className="resources">
                <p>Wood: {props.wood}</p>
                <p>Stone: {props.stone}</p>
                <p>Food: {props.food}</p>
                <p>Gold: {props.gold}</p>
            </div>
            
            
        </VillageStats>
    );
}
const mapStateToProps = state => {
    return { wood: state.wood,
             stone: state.stone,
             food: state.food,
             gold: state.gold,
             villagers: state.villagers}
}
export default connect(mapStateToProps)(VillageStatus);
