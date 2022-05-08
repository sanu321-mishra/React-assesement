import React, { Component } from 'react';
import '../App.css';


class Gallery extends Component {
  render() {
    return (
     
      <div className="container-fluid">
    <div className="row">
      <div className="column">
        <img src="https://images.unsplash.com/photo-1651801002261-f407cdafa8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
        <img src="https://images.unsplash.com/photo-1643513333710-d5fa25591d2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        <img src="https://images.unsplash.com/photo-1651862384755-8daca0d9955b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <img src="https://images.unsplash.com/photo-1640033809641-b44037128681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" />
      </div>
      <div className="column">
        <img src="https://images.pexels.com/photos/3546429/pexels-photo-3546429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/3889868/pexels-photo-3889868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/2091160/pexels-photo-2091160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <img src="https://images.pexels.com/photos/2019546/pexels-photo-2019546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </div>
      <div className="column">
        <img src="https://images.pexels.com/photos/3889868/pexels-photo-3889868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/3779785/pexels-photo-3779785.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <img src="https://images.pexels.com/photos/259987/pexels-photo-259987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
       
      </div>
    </div>
  </div>
    )
  }
}
export default Gallery