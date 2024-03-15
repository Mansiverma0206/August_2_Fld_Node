import { Component } from "react";
import Demo from './demo'
import Test from "./Test";

export default class App extends Component
{
  constructor()
  {
    super()
    this.state = {
      title : "code better"
    }
  }
  render()
  {
    return<div>
      <h1>App Component : {this.state.title}</h1>
      <Demo cname={this.state.title}/>
      <Test/>
    </div>
  }
}


// pros : property =>child component ko parent ne data diya ho use props hote h (props are read only)
