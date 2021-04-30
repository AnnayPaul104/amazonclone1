import React from "react";
import "../View/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home Image"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            description="A short description"
            price={19.29}
            rating={5}
          />
          <Product
            id="2"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)"
            image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg"
            description="Another short description"
            price={19.29}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="HP 63 | Ink Cartridge | Works with HP Deskjet 1112, 2100 Series, 3600 Series, HP ENVY 4500 Series, HP OfficeJet 3800 Series, 4600 Series, 5200 Series | Tri-color | F6U61AN
by HP"
            image="https://images-na.ssl-images-amazon.com/images/I/51QSg+-mgEL.jpg"
            description="Another short product introduction"
            price={19.29}
            rating={5}
          />
          <Product
            id="4"
            title="SAMSUNG 870 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-77E1T0B/AM)
by SAMSUNG"
            image="https://images-na.ssl-images-amazon.com/images/I/31ITAX-GoIL.jpg"
            description="Another short description"
            price={19.29}
            rating={5}
          />
          <Product
            id="5"
            title="TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control, QoS
by TP-Link"
            image="https://images-na.ssl-images-amazon.com/images/I/415vAIn9uEL.jpg"
            description="Another short description"
            price={19.29}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black
by Acer"
            image="https://images-na.ssl-images-amazon.com/images/I/519rzl-wIQL.jpg"
            description="short description"
            price={19.29}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
