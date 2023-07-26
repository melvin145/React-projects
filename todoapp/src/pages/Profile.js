import React from 'react';
import {ChangeProfile} from './ChangeProfile'
export const Profile=(props)=>{
      return(<div>
            <h1>this is profile page</h1>
            <ChangeProfile username={props.username} setusername={props.setusername} />
      </div>)
}