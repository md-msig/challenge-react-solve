import React from 'react';
import { getMachines } from '../actions';
import { getMachineHealth } from '../actions';
import { connect } from "react-redux";


const objectStyle = {
  float: 'left',
  marginRight: 30,
  width: 100,
  height: 30
};
class Machine extends React.Component {
  state = {
  }
  constructor(props) {
    super(props);
    this.props.getMachineHealth(window.location.pathname);
  }
  
  render() {
    return (
      <div>
        <div>Machine id</div>
        <div>
          <div style={{ paddingTop: 10 }}>
            <div style={objectStyle}>{this.props.machine_health.name}</div>
            <div style={objectStyle}>{this.props.machine_health.ip_address}</div>
            <div style={objectStyle}>{this.props.machine_health.health}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.machine_health,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getMachineHealth: (data) => dispatch(getMachineHealth(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Machine);
