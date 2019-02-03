import React, {Component} from 'react';
import axios from 'axios';
import { Button} from 'antd';

class ProductDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            apiResponse: null,
        }
    }

    componentDidMount(){
        
        
        // const get_data = window.localStorage.getItem("productId");
        // console.log(get_data, "get_data");

        // const dummy = 13018569;
        // let { from } = this.props.location.state

        // console.log(from);
        const pid = this.props.location.state.from;

        axios.get(`https://bizhacks.bbycastatic.ca/mobile-si/si/v4/pdp/overview/${pid}?lang=en`)
        .then(response => {
                this.setState({
                    apiResponse: response.data.overview
                })
            // console.log(this.state.apiResponse)
        }).catch(error => {
            console.log(error);
        })
    }

    render (){
        const {productid} = this.props;
        console.log(productid);

        const {apiResponse} = this.state;
        console.log(apiResponse);
        
        return (
            <div>
                {
                    apiResponse && 
                    <div>
                        <h3>{apiResponse.meta.title}</h3>        
                        <hr/>
                        <div className="description-image-div">
                            <img src = {apiResponse.media.primaryImage.url} alt= "img"/>
                            
                            <div className="id-div">
                                <p>Manufacture ID-{apiResponse.manufacturerId.modelNumber}</p>
                                <p>SKUID- {apiResponse.skuId}</p>
                            </div>
                        </div>

                        <div>
                            <h3>Description</h3>
                            <hr/>
                            <p>{apiResponse.meta.description}</p>
                        </div>
                        
                        <Button type="primary" shape="round" icon="download" size={"large"}>CHECKOUT</Button>
                    </div>
            }
            </div>
        )
    }
}

export default ProductDetail;