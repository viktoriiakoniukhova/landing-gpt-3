import './style.css'
import possImage from '../../assets/possibility.png'

export default function Possibilities() {
    return (
        <div className="gpt3__possibilities section__padding" id='possibilities'>
            <div className="gpt3__possibilities-image">
                <img src={possImage} alt="possibilities" />
            </div>
            <div className="gpt3__possibilities-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )  
};
