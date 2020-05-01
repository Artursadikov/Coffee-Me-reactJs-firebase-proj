import React, { Component } from 'react';
import '../Cart/CartBtnsCss.css';
import fire from '../../Configuration/Auth';
import { withRouter } from "react-router-dom";

class CartBtns extends Component {

  state = {
    user: null
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      user ? this.setState({ user: user }) : this.setState({ user: null })
    })

  }

  componentDidMount() {
    this.authListener();
  }


  backToMain = () => {
    this.props.history.goBack();
  }

  toPayment = () => {
    this.props.history.push('/payForm')
  }

  render() {



    return (
      <div className="row order-btn">
        <button onClick={this.backToMain} type="button" className="res-btn">Back</button>
        {
          this.state.user ?
            <button onClick={this.props.addToWishList} type="button" className="wish-li-btn">Add To Wishlist</button>
            :
            null
        }
        <button onClick={this.toPayment} type="button" className="next-btn">Pay</button>
      </div>
    )
  }

}


export default withRouter(CartBtns);

