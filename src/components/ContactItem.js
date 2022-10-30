import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import {getAvatarName} from '../utils/helper'

export default function ContactItem(props) {

  const handleItemClick = (e) => {
    if(props.checked){
      props.handleCheckItem(props.data.id, false);
    }else{
      props.handleCheckItem(props.data.id, true);
    }
  }

  return (
    <Box className='contact-item' sx={{display: 'flex', alignItems:'center', p: 1}} onClick={handleItemClick}>
        <Box display='flex' flexGrow={1} alignItems='center'>
            <Avatar alt="" src={props.data.avatar}>{getAvatarName(props.data.first_name, props.data.last_name)}</Avatar>
            <Box sx={{display: 'flex', flexDirection: 'column', ml: 1, justifyContent: 'flex-end'}}>
                <Typography sx={{fontSize: '18px', lineHeight: 1.2}}>{props.data.first_name} {props.data.last_name}</Typography>
                <Typography sx={{fontSize: '14px', color: 'gray', lineHeight: 1.2}}>{props.data.email}</Typography>
            </Box>
        </Box>
        <Checkbox checked={props.checked}/>
    </Box>
  );
}
