import LogoImage from "../../assets/logo.png";
import './logo.css'

export default function Logo() {
  return(
    <div className="logo">
    <img src={LogoImage} alt="Qtify Logo"/>;
    </div>
  )
}