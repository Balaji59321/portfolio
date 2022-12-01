import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Header from './Header';
import Heading from './Heading';
import { ReactComponent as React } from './Assets/React.svg';
import { ReactComponent as HTML } from './Assets/Html.svg';
import { ReactComponent as CSS } from './Assets/Css.svg';
import { ReactComponent as Git } from './Assets/Git.svg';
import { ReactComponent as JavaScript } from './Assets/Javascript.svg';
import { ReactComponent as Node } from './Assets/Node.svg';
import { ReactComponent as MySql } from './Assets/Mysql.svg';
import { ReactComponent as Python } from './Assets/Python.svg';
import { ReactComponent as Aws } from './Assets/Aws.svg';
import mui from "./Assets/mui.png"
import mongo from "./Assets/mongo.png"
import problem from "./Assets/problemsolving.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import CodeIcon from '@mui/icons-material/Code';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Netflix from "./Assets/netflix.png";
import Covid19 from "./Assets/covid19.png";
import Resume from "./Assets/resume.png";
import AWS from "./Assets/aws.png";
import Expense from  "./Assets/expense.png";
import Chat from "./Assets/Chat.png";
import Milk from  "./Assets/milk.png";

const project = {
  awspolymer: {title: "AWS Polymer Clone",tags: ['React','CSS','Express','Mongo DB'],description: 'AWS Services Dictionary Clone with all the details',backend_code: 'https://github.com/Balaji59321/awspolymerbe',frontend_code: 'https://github.com/Balaji59321/awspolymerfe',fe_deployed_link: 'https://aws-polymer-search-clone.netlify.app/',backend_deployed_link: 'https://aws-polymer-be.onrender.com',source: AWS},
  chatapp: {title: "Chat App",tags: ['React','CSS','Express','Mongo DB','Socket IO'],description: 'Social Media App used for chit-chatting with friends as 1:1 and group chat built using Socket IO',backend_code: 'https://github.com/balaji59321/chat-app',frontend_code: 'https://github.com/balaji59321/chat-app',fe_deployed_link: 'https://chat-app-qw9o.onrender.com/',backend_deployed_link: 'https://chat-app-qw9o.onrender.com/',source: Chat},
  milktracker: {title: "Milk Tracker",tags: ['React','CSS','Express','Mongo DB'],description: 'WebApplication used for collecting milk data from the customers cow farms and prices are slotted depending upon the quality of the milk ',backend_code: 'https://github.com/Balaji59321/milkmanagerBE',frontend_code: 'https://github.com/Balaji59321/milktrackerFE',fe_deployed_link: 'https://milk-tracker-balaji.netlify.app',backend_deployed_link: 'https://money-manager-api-q3o8.onrender.com',source: Milk},
  moneymanager: {title: "Money Manager",tags: ['React','CSS','Express','Mongo DB'],description: 'Manager for your expense / expenditure. Record your transactions and Plan Accordingly',backend_code: 'https://github.com/Balaji59321/money-manager-backend',frontend_code: 'https://github.com/Balaji59321/money-manager-frontend',fe_deployed_link: 'https://money-manager-frontend-balaji.netlify.app',backend_deployed_link: 'https://money-manager-be.onrender.com',source: Expense},
  resumebuilder: {title: "Resume Builder",tags: ['React','CSS','Redux'],description: 'Webpage that generate instant resume on the Fly based on the users input',backend_code: '',frontend_code: 'https://github.com/Balaji59321/resumeBuilder',fe_deployed_link: 'https://resumebuilder-balaji.netlify.app',backend_deployed_link: '',source: Resume},
  netflixclone: {title: "Netflix Clone",tags: ['React','CSS'],description: 'Application which provides the feel of actual Netflix which inturn consumes data from the TMDB',backend_code: '',frontend_code: 'https://github.com/Balaji59321/Netflix_Clone',fe_deployed_link: 'https://netflixclone-a4085.web.app',backend_deployed_link: '',source : Netflix},
  covid19tracker: {title: "Covid 19 Tracker",tags: ['React','CSS'],description: 'Dashboard that provides information of world-wide covid cases handy',backend_code: '',frontend_code: 'https://github.com/Balaji59321/covid19Tracker',fe_deployed_link: 'https://covid19tracker-65664.web.app',backend_deployed_link: '',source: Covid19}
  }

function App() {
  return (
    <div style={{backgrounColor: "#aaa"}}>
    <Header />
    <Box sx={{ transform: "skewY(-3deg)",marginTop: -10,width: "100%",backgroundImage : 'linear-gradient(45deg, #cdd, #eee)'}} py={6}>
      <Box sx={{ transform: "skewY(3deg)",height: "fit-content",border: "1px solid #04648A",display: "flex",borderRadius: "5px",alignItems: "center",flexDirection: {xs: "column",md: "row"},gap: 5 }} my={8} mx={{xs: 3,md:20,lg:30}} px={{xs: 2,md: 9}} py={5}>
        <Heading title={"About Me"} description={"My Work"} />
        <Box sx={{flex:0.7}}>
          <Typography>I am Balaji Narasimhan M V L ,A professional Software developer from Computer Science background having 3 years of Experience in Both Development and in Quantity Assurance.On my free time I develop apps for my ideas on mind and I like playing drawing and Painting. I have a lot of mentors which I learnt from because they are the one that made me who I am today. I usually do a lot of things at my free time which makes me in love with myself.</Typography>
        </Box>
      </Box>
    </Box>
    <Box sx={{ transform: "skewY(-3deg)",width: "100%",backgroundImage : 'linear-gradient(45deg, #333,#555)',color: "#fff"}} py={6}>
      <Box sx={{ transform: "skewY(3deg)",height: "fit-content",border: "1px solid #ffffff",display: "flex",borderRadius: "5px",backgroundColor: "#555",alignItems: "center",flexDirection: {xs: "column",md: "row"} }} my={8} mx={{xs: 2,md:20,lg:30}} px={{xs: 1,md:5,lg:9}} py={5}>
        <Heading title={"My Skills"} description={"Tech Stack"} />
        <Box sx={{flex:0.7,display: "flex",gap: 4,width: "250px",flexWrap: "wrap",justifyContent:"center"}}>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center"}}>
            <React />
            <Typography>React</Typography>
          </Box>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center"}}>
            <HTML />
            <Typography>HTML</Typography>
          </Box>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center"}}>
            <CSS />
            <Typography>CSS</Typography>
          </Box>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center"}}>
            <JavaScript />
            <Typography>JavaScript</Typography>
          </Box>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center"}}>
            <Python />
            <Typography>Python</Typography>
          </Box>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center"}}>
            <Git />
            <Typography>Git</Typography>
          </Box>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center"}}>
            <Node />
            <Typography>Node JS</Typography>
          </Box>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center"}}>
            <MySql />
            <Typography>Mysql</Typography>
          </Box>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center"}}>
            <Aws />
            <Typography>AWS</Typography>
          </Box>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center"}}>
            <img src={`${mui}`} alt='ICON' style={{width: '90px'}}/>
            <Typography>Material UI</Typography>
          </Box>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center"}}>
            <img src={`${mongo}`} alt='ICON' style={{width: '90px'}}/>
            <Typography>MongoDB</Typography>
          </Box>
          <Box sx={{display: "flex",flexDirection: "column",textAlign:"center",alignItems:"center"}}>
            <img src={`${problem}`} alt='ICON' style={{width: '90px'}}/>
            <Typography>Problem Solving</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box p={{xs: 1,md:5}} m={{xs: 1,md: 3}} mb={7} id='projects'>
      <Box sx={{display: "flex",alignItems:'center',flexDirection:"column"}}>
        <Typography className='heading_middle' sx={{margin: "auto",fontWeight: 600}} variant='h4' pt={5}>My Projects</Typography>
        <Typography variant='h7' sx={{fontSize:"23px"}}>User : guest@gmail.com / 123456</Typography>
        <Typography variant='h7' pb={5} sx={{fontSize:"23px"}}>Admin : admin@gmail.com / Admin123</Typography>
        <hr style={{height: "80px",border: "1px solid grey",borderRadius: "3px",margin: "0 0 30px 0"}} />
        <Box sx={{display: "flex",flexWrap: "wrap",gap: 10,justifyContent:"center"}}>
        {Object.values(project).map(ele =>
          <Box sx={{border: "1px solid grey",display: "flex",justifyContent:"center",flexDirection: "column",overflow: "hidden",position: "relative"}} m={1}>
          <Typography variant='h7' sx={{backgroundColor: "grey",color: "#fff",width: "100%"}} p={1}>{ele.title}</Typography>
          <Box sx={{width: {xs: "280px",md: "350px"},height: {xs: "230px",md: "300px"}}}>
            <img src={ele.source} alt='screenshot of project' style={{backgroundImage: "cover",backgroundRepeat: "no-repeat",width: "inherit",height: "inherit"}} />
          </Box>
          <Box sx={{display:"flex",justifyContent:"center",gap: "10px",flexWrap: "wrap",alignItems:"center",backgroundColor: "#fff"}} p={1}>
              <a href={ele.frontend_code} alt='deployed link' style={{textDecoration:'None'}} target='__blank' rel="noopener noreferrer"><Button sx={{color:"#D73F4F",textTransform: "Capitalize",border: "2px solid #D73F4F"}}><CodeIcon /><span style={{marginLeft:"7px"}}>FE Code</span></Button></a>
              {ele.backend_code && <a href={ele.backend_code} alt='deployed link' style={{textDecoration:'None'}} target='__blank'><Button sx={{color:"#D73F4F",textTransform: "Capitalize",border: "2px solid #D73F4F"}}><CodeIcon /><span style={{marginLeft:"7px"}}>BE Code</span></Button></a>}
              <a href={ele.fe_deployed_link} alt='deployed link' style={{textDecoration:'None'}} target='__blank' rel="noopener noreferrer"><Button sx={{color:"#D73F4F",textTransform: "Capitalize",border: "2px solid #D73F4F"}}><LinkIcon /><span style={{marginLeft:"7px"}}>Website</span></Button></a>
            </Box>
          <Button className='viewmore' sx={{textAlign:"center",backgroundColor: "#D73F4F",color: "#fff",width: "100%",textTransform: 'capitalize'}} p={2}>View More ^</Button>
          <Box className='modal' p={0.2} sx={{backgroundColor: "white",border: {xs: "4px solid #D73F4F",md: "5px solid #D73F4F"}}}>
            <Typography variant='h6'>{ele.title}</Typography>
            <Typography variant='h7' sx={{textAlign:"left"}} p={1}>{ele.description}</Typography>
            <Typography variant='h7' sx={{display: "flex",alignItems: "center"}} py={2}><LocalOfferIcon />Tags: <span style={{paddingLeft: "5px"}}>{ele.tags.join(" , ")}</span></Typography>
          </Box>
        </Box>
        )}
        </Box>
      </Box>
    </Box>
    <Box p={5} m={3}>
    <Box sx={{flex:0.7,display: "flex",alignItems:'center',flexDirection:"column"}}>
      <Typography className='heading_middle' sx={{margin: "auto",fontWeight: 600}} variant='h4' pt={5}>Contact Me</Typography>
      <hr style={{height: "80px",border: "1px solid grey",borderRadius: "3px",margin: "30px 0"}} />
      <Box sx={{display: "flex",gap: "100px",flexDirection: {xs: "column",md: "row"}}}>
      <Box sx={{display: "flex",flexDirection: "column",alignItems:"center",border: "1px solid grey",borderRadius: "3px",boxShadow: "10px 10px 20px #aaa",width: "150px"}} p={5}>
        <EmailIcon fontSize='large' />
        <Typography variant='h5' p={1} sx={{fontWeight: "600"}}>Gmail</Typography>
        <Typography>balaji59321@gmail.com</Typography>
      </Box>
      <Box sx={{display: "flex",flexDirection: "column",alignItems:"center",border: "1px solid grey",borderRadius: "3px",boxShadow: "10px 10px 20px #aaa",width: "150px"}} p={5}>
        <LinkedInIcon fontSize='large'/>
        <Typography variant='h5' p={1} sx={{fontWeight: "600"}}>LinkedIn</Typography>
        <Typography><a style={{color: "#111",letterSpacing: 1}} href='https://www.linkedin.com/in/balaji-narasimhan-m-v-l-138aa4144/' target='__blank' rel="noopener noreferrer">Linked In</a></Typography>
      </Box>
      <Box sx={{display: "flex",flexDirection: "column",alignItems:"center",border: "1px solid grey",borderRadius: "3px",boxShadow: "10px 10px 20px #aaa",width: "150px"}} p={5}>
        <GitHubIcon fontSize='large'/>
        <Typography variant='h5' p={1} sx={{fontWeight: "600"}}>Github</Typography>
        <Typography><a style={{color: "#111",letterSpacing: 1}}  href='https://github.com/Balaji59321/' target='__blank' rel="noopener noreferrer">Github</a></Typography>
      </Box>
      </Box>
    </Box>
    </Box>
    <Box sx={{color: "white",backgroundImage : 'linear-gradient(45deg, #333,#555)'}} p={2} mt={15}>
      <Typography variant='h7' sx={{display: "flex",justifyContent:"center"}}>{new Date().getFullYear()} - Designed and Developed By - Balaji Mvl</Typography>
    </Box>
    </div>
  );
}

export default App;