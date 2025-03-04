import React, { useState } from 'react'
import { Button, Container, Paper, TextField, Typography, Stack, Avatar, IconButton } from '@mui/material'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/StyledComponents'
import { useFileHandler, useInputValidation } from '6pp'
import { usernameValidator } from '../utils/validators'


const Login = () => {
    const [isLogin, setIsLogin] = useState(true)

    const toggleLogin = () => setIsLogin(prev => !prev)

    const name = useInputValidation("")
    const bio = useInputValidation("")
    const username = useInputValidation("", usernameValidator)
    const password = useInputValidation("")

    const avatar = useFileHandler("single")

    const handleLogin = (e) => {
        e.preventDefault()
    }

    const handleSignUp = (e) => {
        e.preventDefault()
    }


    return (
        <div
        style={{
         backgroundImage:
         "linear-gradient(rgba(0, 0, 0, 0.12), rgb(45 93 194 / 62%))"
        }}
     
  >
     <Container
         component={"main"}
         maxWidth="xs"
         sx={{
             height: "100vh",
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
         }}
     >
         <Paper
             elevation={3}
             sx={{
                 padding: 4,
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center",
             }}
         >
             {isLogin ? (
                 <>
                     <Typography variant="h5">Login</Typography>
                     <form style={{
                         width: "100%",
                         marginTop: "1rem",
                     }}
                     onSubmit={handleLogin}
                     >
                         <TextField
                             required
                             fullWidth
                             label="Username"
                             margin="normal"
                             variant="outlined"
                             value={username.value}
                             onChange={username.changeHandler}
                         />

                         <TextField
                             required
                             fullWidth
                             label="Password"
                             type="password"
                             margin="normal"
                             variant="outlined"
                             value={password.value}
                             onChange={password.changeHandler}
                         />

                         <Button
                             sx={{
                                 marginTop: "1rem",
                             }}
                             type="submit"
                             variant="contained"
                             color="primary"
                             fullWidth
                         >
                             Login
                         </Button>

                         <Typography textAlign={"center"} m={"1rem"}>
                             OR
                         </Typography>

                         <Button
                             sx={{
                                 marginTop: "1rem",
                             }}
                             fullWidth
                             variant="text"
                             onClick={toggleLogin}
                         >
                             Sign Up Instead
                         </Button>
                     </form>
                 </>
             ) : (
                 <>
                     <Typography variant="h5">Sign Up</Typography>
                     <form style={{
                         width: "100%",
                         marginTop: "1rem",
                     }}
                      onSubmit={handleSignUp}
                     >
                         <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                             <Avatar
                                 sx={{
                                     width: "10rem",
                                     height: "10rem",
                                     objectFit: "contain"
                                 }}
                                 src={avatar.preview}
                             />

                             <IconButton
                                 sx={{
                                     position: "absolute",
                                     bottom: 0,
                                     right: 0,
                                     color: "white",
                                     backgroundColor: "rgba(0,0,0,0.5)",
                                     "&:hover": {
                                         backgroundColor: "rgba(255,255,255,0.7)"
                                     }
                                 }}
                                 component="label"
                             >
                                 <CameraAltIcon />
                                 <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                             </IconButton>
                         </Stack>

                         {avatar.error && (
                             <Typography
                              m={"1rem"} 
                              width={"fir-content"}
                              display={"block"}
                              color="error"
                               variant="caption"
                               >
                                 {avatar.error}
                             </Typography>
                         )}

                         <TextField
                             required
                             fullWidth
                             label="Name"
                             margin="normal"
                             variant="outlined"
                             value={name.value}
                             onChange={name.changeHandler}
                         />

                         <TextField
                             required
                             fullWidth
                             label="Bio"
                             margin="normal"
                             variant="outlined"
                             value={bio.value}
                             onChange={bio.changeHandler}
                         />

                         <TextField
                             required
                             fullWidth
                             label="Username"
                             margin="normal"
                             variant="outlined"
                             value={username.value}
                             onChange={username.changeHandler}
                         />

                         {username.error && (
                             <Typography color="error" variant="caption">
                                 {username.error}
                             </Typography>
                         )}

                         <TextField
                             required
                             fullWidth
                             label="Password"
                             type="password"
                             margin="normal"
                             variant="outlined"
                             value={password.value}
                             onChange={password.changeHandler}
                         />

                        {/* {password.error && (
                             <Typography color="error" variant="caption">
                                 {password.error}
                             </Typography>
                         )} */}

                         <Button
                             sx={{
                                 marginTop: "1rem",
                             }}
                             type="submit"
                             variant="contained"
                             color="primary"
                             fullWidth
                         >
                             Sign Up
                         </Button>

                         <Typography textAlign={"center"} m={"1rem"}>
                             OR
                         </Typography>

                         <Button
                             sx={{
                                 marginTop: "1rem",
                             }}
                             fullWidth
                             variant="text"
                             onClick={toggleLogin}
                         >
                             Login Instead
                         </Button>
                     </form>
                 </>
             )}
         </Paper>
     </Container> 
    </div>
  );
};
       
export default Login;