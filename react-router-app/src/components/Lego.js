import Navbar from "./Navbar"
import cloudcity from "./legoPics/cloudCityBetrayl.jpg"
import duel from "./legoPics/duelOfFates.jpg"
import falcon from "./legoPics/milFalcon.jpg"
import throne from "./legoPics/throneRoomBattle.jpg"
import yodaHut from "./legoPics/yodasHut.jpg"

const Lego = () => {
  return (
    <>
    <Navbar/>
    <h1>PICTURES OF MY FAVORITE LEGOS</h1>

    <img src={cloudcity} alt="Han gets frozen" />
    <img src={duel} alt="deul of fates" />
    <img src={falcon} alt="millenium Falcon" />
    <img src={throne} alt="throne room battle" />
    <img src={yodaHut} alt="dagobah hut" />
    </>
  )
}

export default Lego
