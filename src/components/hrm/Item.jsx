import * as React from "react";
import {withRouter} from "react-router-dom";

export default class Item extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
        console.log(this.props.match.params.id);
    }
    render() {
        return(
            <div>
                Item 页面{this.props.match.params.id}的数据
            </div>
        )
    }

}