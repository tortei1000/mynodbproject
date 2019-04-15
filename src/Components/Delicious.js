import React, {Component} from 'react'
import { toast } from 'react-toastify';

export default class Delicious extends Component{

  render() {
  return (
    <div>
    <img src="https://i.pinimg.com/originals/85/de/7f/85de7f0ef9bfb54efef7354cc6d47b09.gif" width="100px" onClick={()=> toast.success(`I am delicious!`)}/>
    </div>
    )
  }
}