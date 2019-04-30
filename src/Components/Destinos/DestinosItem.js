import React from 'react';
class DestinosItem extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.attributes.title}</h2>
                <div dangerouslySetInnerHTML={{__html: this.props.attributes.body.value}} />
            </div>
        );
    }
}

export default DestinosItem;