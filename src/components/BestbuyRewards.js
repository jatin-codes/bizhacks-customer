import React, {Component} from 'react';
import axios from 'axios';

class BestBuyAwards extends Component {

    componentDidMount(){
        axios.get('https://bizhacks.bbycastatic.ca/mobile-si/si/v3/products/search?query=laptop&storeId=&zipCode=&facetsOnly=&platform=&lang=en')
        .then(response => {
            console.log(response.data);
        })
    }



    render (){
        return (
            <div>
                <h2>Partner Main component</h2>
                <p>here we show the static webpage for the organization which already exists</p>
            </div>
        )
    }
}

export default BestBuyAwards;