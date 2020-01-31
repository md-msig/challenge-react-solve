import React, { Component } from 'react';
import Button from '../components/Button';
import { getMachineHealth } from '../actions';
import { connect } from "react-redux";

const objectStyle = {
  float: 'left',
  marginRight: 30,
  width: 100,
  height: 30
};

class MachinesList extends Component {
  state = {
    machine_health: [],
  }
  constructor(props) {
    super(props);
  }

  handleClick = id => {
    this.props.getMachineHealth(id);
    this.props.onClickItem(id);
  };
  render() {
    return (
      <div style={{ float: 'left', margin: 10 }}>
        <div>
          {
            this.props.machines.map((machine) => {
              return <div>
                <div style={objectStyle}>{machine.name}</div>
                <div style={objectStyle}>{machine.ip_address}</div>
                <div style={objectStyle}>{machine.health}</div>
                <div style={objectStyle}>
                  <Button name='Get latest Health' clickHandler={() => this.handleClick(machine.id)} />
                </div>

              </div>
            })
          }
        </div>
        {/* <div style={{paddingTop: 150}}>
            <div style={objectStyle}>{this.props.machine_health.name}</div>
            <div style={objectStyle}>{this.props.machine_health.ip_address}</div>
            <div style={objectStyle}>{this.props.machine_health.health}</div>
        </div> */}
      </div>
    )
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
)(MachinesList);

