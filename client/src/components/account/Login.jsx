import {useState} from "react";
import {Box,TextField,Button,styled,Typography} from '@mui/material';
import { useNavigate } from "react-router-dom";

const Component=styled(Box)`
    width: 400px;
    margin:auto;
    box-shadow:5px 2px 7px 2px rgb(0 0 0/0.6);

`;
const Image=styled('img')({
    width:100,
    margin:'auto',
    display:'flex',
    padding:'50px 0 20px 0 '
});

const Wrapper=styled(Box)`
    padding:25px 35px;
    display:flex;
    flex:1;
    flex-direction:column;   
    & >div, & > button, & > p{
        margin-top:10px
    }
`;

const LoginButton=styled(Button)`
    text-transform:none;
    background:#fb6418;
    height:48px;
    border-radius:2px;
`;

const SignupButton=styled(Button)`
    text-transform:none;
    background:#fff;
    color:#fb6418;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`;
const Text=styled(Typography)`
    color:#878787;
    font-size:16px;
`;
const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};
const Login=()=>{

    const[account,toggleAccount]=useState(true);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const navigate=useNavigate();

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const toggleSignup=()=>{
        toggleAccount(!account);
    }

    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
    }

    return(
        <Component>
        <Box>
            <Image src= {imageURL} alt="image" />
            {account===true?
            <Wrapper> 
                <TextField variant="standard" label="Enter username"/>
                <TextField variant="standard" label="Enter password"/>
                <LoginButton variant="contained">Login</LoginButton> 
                <Text style={{textAlign:'center'}}>OR</Text>
                <SignupButton onClick={()=>toggleSignup()}>Create an account</SignupButton>
            </Wrapper>
            :
            <Wrapper> 
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='name' label="Enter Name"/>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter Username"/>
                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter password"/>
                
                <SignupButton >Signup</SignupButton>
                <Text style={{textAlign:'center'}}>OR</Text>
                <LoginButton variant="contained" onClick={()=>toggleSignup()}>Already have an account?</LoginButton> 
            </Wrapper>
            }
        </Box>
        </Component>
    )
}
export default Login;