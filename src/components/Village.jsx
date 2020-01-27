import React from 'react';
import { connect } from 'react-redux';
import VillageStatus from './VillageStatus';
import ActionBar from './ActionBar';
import Buildings from './buildings/Buildings';

const Village = () => {
    return (
        <div>
            <Buildings />
            <VillageStatus />
            <ActionBar />
            
        </div>
    );
}

const mapStateToProps = state => {
    return {state}
}

export default connect(mapStateToProps)(Village);
