import React from "react";
// import github from "../assets/images/github-icon.png";
// import linkedin from "../assets/images/linkedin-icon.png";
// import stackoverflow from "../assets/images/stackoverflow-icon.png";
import pixelesque from "../assets/images/pixelesque-icon.png";
import "../styles/Footer.css";
export default function Footer() {
  return (
    <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <h5><i class="fa fa-road"></i> ACME CO INC.</h5>
                <div class="row">
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="">Product</a></li>
                            <li><a href="">Benefits</a></li>
                            <li><a href="">Partners</a></li>
                            <li><a href="">Team</a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Legal Terms</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
                </div>
                <ul class="nav">
                    <li class="nav-item"><a href="www.facebook.com" class="nav-link pl-0"><i class="fa fa-facebook fa-lg"></i></a></li>
                    <li class="nav-item"><a href="www.facebook.com" class="nav-link"><i class="fa fa-twitter fa-lg"></i></a></li>
                    <li class="nav-item"><a href="www.facebook.com" class="nav-link"><i class="fa fa-github fa-lg"></i></a></li>
                    <li class="nav-item"><a href="www.facebook.com" class="nav-link"><i class="fa fa-instagram fa-lg"></i></a></li>
                </ul>
                <br/>
            </div>
            
        </div>
    </div>
</footer>
  );
}