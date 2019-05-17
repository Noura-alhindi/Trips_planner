import React, {Component} from  'react'
import axios from 'axios';
import Restaurant from '../components/Restaurant';


class UserHome extends Component{
state ={
    restaurants: []
}
    componentDidMount=()=>{
        axios.get('/api/restaurants')
        .then(response => {
          console.log("i am a response",response.data.restaurant)
          if(response.data.restaurant.length > 0){
            
        let data = {...this.state}
        data.restaurants = response.data.restaurant
            this.setState(data)
          }
        })
        .catch()
    }

    render(){
       let all = this.state.restaurants.map((restaurant)=>{
return <Restaurant rest={restaurant}/>
        })
        return(
            <div>

          {all}
           
            </div>

        )
    }
}


export default UserHome