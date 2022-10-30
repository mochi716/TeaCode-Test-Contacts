import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../store/slice';
import ContactItem from './ContactItem';

const pageSize = 30;

export default function ViewContainer() {
  const [search, setSearch] = useState('');
  const [searchedList, setSearchedList] = useState([]);
  const [showedList, setShowedList] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const allList = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const LoadContacts = () => {
    const fetchUrl = `https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json`
    fetch(fetchUrl).then((res) => res.json())
    .then((res) => {
        dispatch(setContacts(res.sort((a, b) => (a.last_name > b.last_name ? 1 : -1))));
      }
    ).catch((error) => {
        console.log(error)
    });
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const handleCheckItem = (id, value) => {
    let temp = [...selectedIds];
    if(value){
      temp.push(id);
    }else{
      temp.splice(temp.indexOf(id), 1);
    }
    console.log("Selected IDs: ", temp)
    setSelectedIds(temp);
  }
  const handleClearCheck = () => {
    setSelectedIds([]);
  }
  const handleScroll = (e) => {
    if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight - 50) {
      if (showedList.length < searchedList.length){
        setShowedList(searchedList.slice(0, showedList.length + pageSize));
      }
    }
  }

  useEffect(() => {
    LoadContacts();
  }, []);

  useEffect(() => {
    setSearchedList(allList.filter(x => (x.first_name + x.last_name).indexOf(search) !== -1));
  }, [search, allList])

  useEffect(() => {
    setShowedList(searchedList.slice(0, pageSize));
  }, [searchedList]);

  return (
    <Box sx={{p: 4, height: 'calc(100vh - 64px)', overflow: 'hidden', boxSizing: 'border-box'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <Box sx={{width: 400, maxWidth: '100%', pl: 3, display: 'flex', flexDirection: 'column'}}>
            <TextField size="small" fullWidth  value={search} onChange={handleSearchChange} placeholder={'Search'}/>
            <Typography sx={{textAlign: 'left', mt: 1}}>{searchedList.length} items found</Typography>
          </Box>
          <Box>
            <Button variant='contained' color='secondary' onClick={handleClearCheck}>Clear Check</Button>
          </Box>
        </Box>
        <Box sx={{mt: 2, overflowY: 'scroll', flexGrow: 1, px: 3, display: 'flex', flexDirection: 'column'}} onScroll={handleScroll}>
          {showedList.map((item) => (
            <ContactItem key={item.id} data={item} handleCheckItem={handleCheckItem} checked={selectedIds.indexOf(item.id) !== -1}/>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
