import React from 'react';
import { Select } from 'antd';
const _ =  require('lodash');

const { Option } = Select;



export default class SelectPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selects:[],
        }
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }
    componentDidMount() {
        var data = this.getData();
        console.log(data);
         this.setState({
             selects:data
         })
    }
    getData() {
        let res = [];
        for (let index = 0; index <300; index++) {
            let sId = _.uniqueId('select');
            let selectData = {
                sid: sId,
                options: this.getOptions()
            }
            res.push(selectData); 
        }

        return res;

    }
    getOptions() {
        let res = []
        for (let index = 0; index < 600; index++) {
            let id = _.uniqueId('option');
            let option = {
                id,
                label: 'test' + id
            }
            res.push(option);
        }
        return res;
    }

    render() {
        console.log(this.state.selects)
        return (
            <div >
            {this.state.selects.map(selectData=>{
                return(
                    <Select key={selectData.sid} style={{ width: 120 }} onChange={this.handleChange}>
                        {selectData.options.map(opt=>{
                             return (<Option value={opt.id} key={opt.id}>{opt.label}</Option>);  
                         })}
                </Select>
                );
            })}
               

            </div>
        );
    }
}