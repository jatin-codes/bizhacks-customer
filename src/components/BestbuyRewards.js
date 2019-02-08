import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class BestBuyRewards extends Component {

    constructor(props){
        super(props);

        this.state = {
            apiResponse: null,
            renderResponse: false,
            skuId: null,
            point: null,
            name: null,
        }
    };
    handleClick(skuId) {
        this.setState({skuId, renderResponse: true})
    }

    componentDidMount(){

        let point = 50;
        let name = "Bob";

        if(this.props.location.state){
            point = this.props.location.state.point;
        }

        if(this.props.location.state){
            name = this.props.location.state.name;
        }
        this.setState({
            point, 
            name
        })

        axios.get('https://bizhacks.bbycastatic.ca/mobile-si/si/v3/products/search?query=laptop&storeId=&zipCode=&facetsOnly=&platform=&lang=en')
        .then(response => {
            this.setState({
                apiResponse: response.data.searchApi.documents,                
            });

            // console.log(this.state.apiResponse)
        })
    }

    render (){
        const {apiResponse, renderResponse, skuId} = this.state;

        if(renderResponse){
            // return this.context.router.push({
            //     pathName: "/productDetails",
            //     state: {productId: "ASDASDA"}
            // })

            // window.location('/productDetails/' + '/asdasd');
            // return <Redirect to="/productDetail:productId" />

            return <Redirect
                to={{
                pathname: "/productDetails",
                state: { from: skuId }
                }}
            />

            // window.localStorage.setItem("productId", "ASDASD");
            // // return <Redirect to='/productDetails/' pId='123'/>
            // return <Redirect to={{
            //     pathname: '/productDetails/',
            //      pId: '123'
            // }}

    // />
        }

        return (
            <div>
                <h2>Redeemable products</h2>
                <div className="user_div">
                    <h3>Welcome back, {this.state.name}!     </h3>
                    <br/>
                    <h3 style={{color: "Blue"}}>You got {this.state.point} points</h3>
                </div>
                <hr/>
{
    apiResponse && 
        <div className="product-container">
        {
            apiResponse.map(product => {
                return(
                    <div key={product.skuId} className="products-card" onClick={() => this.handleClick(product.skuId)}>
                        <img src={product.summary.media.primaryImage.url} alt="item" className="product-image"/>
                        <h5>{product.summary.names.short}</h5>
                        <div className="price-div">
                            <h5>REGULAR PRICE$  {product.priceBlock.itemPrice.currentPrice}</h5>
                            <h4 style={{color: "red", margin:0}}>{product.priceBlock.itemPrice.currentPrice * 50}</h4>
                        </div>
                        {/* <p>{product.summary.customerRatings.averageRating.score}</p> */}
                        <div className="card-shop-button">
                            <h5>SHOP NOW > </h5>
                        </div>
                    </div>
                )
            })
}
        </div>

}
            </div>
        )
    }
}

export default BestBuyRewards;