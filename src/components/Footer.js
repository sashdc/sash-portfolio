import React from "react";
// import github from "../assets/images/github-icon.png";
// import linkedin from "../assets/images/linkedin-icon.png";
// import stackoverflow from "../assets/images/stackoverflow-icon.png";
// import pixelesque from "../assets/images/pixelesque-icon.png";
import "../styles/Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
    <div className="container-fluid">
        <div className="row">
            <div >
                <h5><i className="fa fa-bolt"></i> Sash DC Web Development</h5>
                <div className="row">
                    <div >
                        <ul class="list-unstyled">
                            <li><a href="#portfolio">WebDev Portfolio</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="https://www.pixelesquephotography.com">Photography</a></li>
                        </ul>
                    </div>
                    
                </div>
                <ul className="nav">
                    <li className="nav-item"><a href="www.facebook.com" target="_blank" rel="noopener noreferrer" className="nav-link "><i className="fa fa-stack-overflow fa-lg"></i></a></li>
                    <li class="nav-item"><a href="https://github.com/sashdc" target="_blank" rel="noopener noreferrer" className="nav-link"><i className="fa fa-github fa-lg"></i></a></li>
                    <li className="nav-item"><a href="https://www.linkedin.com/in/saharsh-cherian" target="_blank" rel="noopener noreferrer"className="nav-link"><i className="fa fa-linkedin fa-lg"></i></a></li>
                </ul>
                <br/>
            </div>
            
        </div>
    </div>
</footer>
  );
}