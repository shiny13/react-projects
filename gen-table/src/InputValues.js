import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';
import './InputValues.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class InputValues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: 0,
            input2: 0,
            input3: 0,
            input4: 0,
            input5: 0
        }
    }
    updateInputValue(evt, field) {
        if (field === 'input1') {
            this.setState({ 'input1': evt.target.value });
        } else if ((field === 'input2')) {
            this.setState({ 'input2': evt.target.value });
        } else if ((field === 'input3')) {
            this.setState({ 'input3': evt.target.value });
        } else if ((field === 'input4')) {
            this.setState({ 'input4': evt.target.value });
        } else if ((field === 'input5')) {
            this.setState({ 'input5': evt.target.value });
        }
        console.log(this.state);
      }
    render() {
        return (
            <div className="input-boxes">
                <div>
                    <div className="entry">
                        First: <input id="input1" name="input1" type="number" value={this.state.input1} onChange={(evt) => this.updateInputValue(evt, 'input1')} />
                    </div>
                    <div className="entry">
                        Second: <input id="input2" name="input2" type="number" value={this.state.input2} onChange={evt => this.updateInputValue(evt, 'input2')} />
                    </div>
                    <div className="entry">
                        Third: <input id="input3" name="input3" type="number" value={this.state.input3} onChange={evt => this.updateInputValue(evt, 'input3')} />
                    </div>
                    <div className="entry">
                        Fourth: <input id="input4" name="input4" type="number" value={this.state.input4} onChange={evt => this.updateInputValue(evt, 'input4')} />
                    </div>
                    <div className="entry">
                        Fifth: <input id="input5" name="input5" type="number" value={this.state.input5} onChange={evt => this.updateInputValue(evt, 'input5')} />
                    </div>
                </div>
                <div>
                        <Container>
                            <Row className="addBorder colHeaderBackground">
                                <Col>First</Col>
                                <Col>Second</Col>
                                <Col>Third</Col>
                                <Col>Fourth</Col>
                                <Col>Fifth</Col>
                            </Row>
                            <Row className="addBorder colBackground">
                                <Col>{this.state.input1}</Col>
                                <Col>{this.state.input2}</Col>
                                <Col>{this.state.input3}</Col>
                                <Col>{this.state.input4}</Col>
                                <Col>{this.state.input5}</Col>
                            </Row>
                        </Container>
                </div>
                <div>
                    <PieChart
                        data={[
                            { title: 'One', value: (this.state.input1 !== '') ? Number(this.state.input1) : 0, color: '#fff68f' },
                            { title: 'Two', value: (this.state.input2 !== '') ? Number(this.state.input2) : 0, color: '#f78c58' },
                            { title: 'Three', value: (this.state.input3 !== '') ? Number(this.state.input3) : 0, color: '#f6c2c2' },
                            { title: 'Four', value: (this.state.input4 !== '') ? Number(this.state.input4) : 0, color: '#93c8e7' },
                            { title: 'Five', value: (this.state.input5 !== '') ? Number(this.state.input5) : 0, color: '#45748d' }
                        ]}
                        animate={false}
                        animationDuration={500}
                        animationEasing="ease-out"
                        cx={30}
                        cy={30}
                        label={false}
                        labelPosition={50}
                        lengthAngle={360}
                        lineWidth={100}
                        paddingAngle={0}
                        radius={20}
                        rounded={false}
                        startAngle={0}
                        viewBoxSize={[
                            100,
                            100
                        ]}
                    />
                </div>
            </div>
        )
    }
}

export default InputValues;