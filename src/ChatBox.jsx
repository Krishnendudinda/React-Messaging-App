import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./ChatBox.css"
export default function ChatBox({infoMssg}){
    return (
        <div className="ChatBox">
            <div className='card'>
                <Card sx={{ Width: 90 }}>
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <h4>from: <i>{infoMssg.from}</i></h4>
                            <h4>to: <i>{infoMssg.to}</i></h4>
                            <h4 style={{color:"green"}}>mssg:{infoMssg.mssg}</h4>
                        </Typography>
                    </CardContent>
               </Card>
            </div>
        </div>   
    )
}