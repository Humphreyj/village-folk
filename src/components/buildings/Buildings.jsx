import React from 'react';
import { connect } from 'react-redux';
import TownCenter from './TownCenter';

const Buildings = (props) => {
    return (
        <div>
            {props.buildings.map((building,i) => {
                return (
                    <TownCenter
                    key={i}
                    name={building.name}
                    description={building.description}
                    
                     />
                )
            })}
            
        </div>
    );
}

const mapStateToProps = state => {
    return { buildings: state.buildings }
}

export default connect(mapStateToProps)(Buildings);
