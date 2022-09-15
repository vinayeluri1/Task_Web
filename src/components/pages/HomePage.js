import React from 'react'
import { Link } from 'react-router-dom'
import { IconName } from "react-icons/fa";
export default function HomePage() {
    const [data,setData] = React.useState([]);
    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json()
          })
          .then(data => {
            console.log('data',data)
            setData(data)
          })
        .catch((err)=>console.log(err))
    })
    return (
        <div style={{backgroundColor:'#EFEFEF'}}>
        <div style={{marginLeft:150,marginRight:150,backgroundColor:'#EFEFEF'}}>
            <div style={{display: 'flex', flexDirection: 'row',backgroundColor:'#00008B'}}>
            <img style={{width:45,height:45}} src={require('../../assets/images/publish.png')} />
            <div style={{width:'80%'}}>
            <p style={{marginLeft:20,color:'#fff',margin:10,bottom:10}}>Published</p>
            </div>
                
            <Link to="/">
                <p style={{top:20,color:'#fff',margin:10}} >Log out</p>
            </Link>
            </div>
             {
             data.map(user => (
                <div style={{display: 'flex', flexDirection: 'row',backgroundColor:'#EFEFEF',padding:10}}>
                    <div style={{backgroundColor:'#fff',borderBottomLeftRadius:20,borderTopLeftRadius:20}}>
                    <img style={{width:100,height:100,borderRadius:20 ,margin:10}} src={require('../../assets/images/bg.png')} />
                    </div>
                    <div style={{backgroundColor:'#fff', width:'100%',borderBottomRightRadius:20,borderTopRightRadius:20,alignItems:'center',justifyContent:'center'}}>
            <p key={user.id} style={{fontSize:15}}>{user.title}</p>
            <p style={{fontSize:10}} key={user.id}>{user.body}</p>
            <div style={{display: 'flex', flexDirection: 'row',}}>
                <p>select</p>
                <p style={{marginLeft:20}}>more..</p>
            </div>
            </div>
            </div>
          ))}
            {/* <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link> */}
        </div>
        </div>
    )
}
