import { Component } from "react";

export default class Demo extends Component
{
   render()
   {
      return<div>
         <h1>Demo Component : {this.props.cname}</h1>
      </div>
   }
}