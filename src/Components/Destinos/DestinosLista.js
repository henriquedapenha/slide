import React from 'react';
import DestinosItem from './DestinosItem';

export default class DestinosLista extends React.Component{
    render(){
        let { data } = this.props;
        return (
        <div>
            <h1>Here are your best Travel Destinations</h1>
            {data !== null &&
            data !== undefined &&
            data.length > 0 ?
            data.map(item => <DestinosItem {...item} key={item.id}/>)
            :
            <div>No destinations found.</div>
            }
        </div>
        );
    };
}