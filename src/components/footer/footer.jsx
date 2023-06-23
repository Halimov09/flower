import { colors } from "../../constants/color";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  return (
    <div style={{ marginTop: "90px", padding: "60px"}} className="shadow p-3 mb-5 bg-body-tertiaryn darkmode">
      <div className="container footer" style={{display:"flex", justifyContent: "space-around", alignItems: "center"}}>
        <div className="one"><h5 style={{color: colors.gren}}>Спасибо, что доверяете нам</h5></div>
       
        <div className="three" style={{display: "flex", flexDirection: "column", gap: "20px"}}>
        <a style={{color: colors.gren, fontWeight: "bold"}} href="#">{<TelegramIcon style={{color: colors.gren, marginRight: "30px"}} />} Telegram</a>
        <a style={{color: colors.gren, fontWeight: "bold"}} href="#">{<WhatsAppIcon style={{color: colors.gren, marginRight: "30px"}} />} Whatsap</a>
        <a style={{color: colors.gren, fontWeight: "bold"}} href="tel:+7 926 394 53 25">{<LocalPhoneIcon style={{color: colors.gren, marginRight: "30px"}} />} +7 926 394 53 25</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
