import './css/style.css';
import './css/index.css';
import image from "./asset/customer-support.jpg"


export default function MobileCTA() {
    return (
        <div className="container mobilecta">
                <div className="column flex">
                    <div className="img">
                        <img src={image} alt="customer support" />
                    </div>
                    <div>
                        <h3>Call Us Today!</h3>
                        <p>For more information contact us today!</p>
                    </div>
                    <div><i className="fa-solid fa-phone-volume"></i></div>
                </div>
        </div>
    );
}