import React from 'react';
import { getMachines } from '../actions';
import MachinesList from './MachinesList';

import { connect } from "react-redux";

class Machines extends React.Component {
	state = {
		machines: [],
	}
	constructor(props) {
		super(props);
		this.props.getMachines();		
	}

	handleClickItem = (id) => {
		window.location.href = '/machines/' + id;
	}

	render() {
		return <div>
			<div>Machines view</div>
			<MachinesList machines={this.props.machines} onClickItem={(val) => this.handleClickItem(val)}/>
		</div>
	}
}
const mapStateToProps = (state) => {
	return {
		...state.machines,
	}
};

const mapDispatchToProps = (dispatch) => ({
	getMachines: () => dispatch(getMachines()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Machines);
