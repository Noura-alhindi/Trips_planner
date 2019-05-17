import React, { Component } from 'react'
import Restaurant from '../components/Restaurant';


export default class restContainer extends Component {
    state = {
                venue :[]
            }
        
            componentWillReceiveProps(nextProps){
                console.log("will re: ",nextProps)
                // if(nextProps.venue > 0){
                  let data = {...this.state}
                  data.venue = nextProps.venue
                    console.log("e",data)
                  this.setState(data);
                //   this.getData(venue);
                // }
              }
          render() {
              console.log("rest container: ",this.props.venue)
              console.log("state:", this.state.venue )
              console.log("state:", this.state.venue.length )
        
            return (
              <div>
                {this.state.venue.map((res, index) =>
                    <Restaurant venue={res} key={index} />
                )}
              </div>
            )
          }
}
