import React from 'react';
import { connect } from 'react-redux';
import { gatherWood, gatherStone, gatherFood } from '../actions';

const ActionBar = (props) => {
    return (
        <div>
            <button
            onClick={() =>props.gatherWood()}
            className="gather-resource">Chop Wood</button>
            <button
            onClick={() =>props.gatherStone()}
            className="gather-resource">Mine Stone</button>
            <button 
            onClick={() =>props.gatherFood()}
            className="gather-resource">Hunt/Forage</button>
            
        </div>
    );
}

const mapStateToProps = state => {
return {}
}

export default connect(mapStateToProps,
    {gatherWood,
     gatherStone,
     gatherFood
})(ActionBar);
