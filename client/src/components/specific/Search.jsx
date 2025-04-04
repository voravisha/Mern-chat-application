import {
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, {useState} from "react";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";


const Search = () => {
  const search = useInputValidation("");

  let isLoadingSendFriendRequest = false
  const [users,setUsers] = useState([sampleUsers])

  const addFriendHandler = (id) => {
    console.log(id)
  }

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find people</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment positions="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((user) => (
            <UserItem
            user={i}
            key={i._id}
            handler={addFriendHandler}
            handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};
export default Search;
