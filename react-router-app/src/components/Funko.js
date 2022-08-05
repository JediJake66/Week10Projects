import Navbar from "./Navbar";
import boba from "./funkoPics/redBoba.jpg";
import chewy from "./funkoPics/signedChewy.jpg";
import grogu from "./funkoPics/grogu.jpg";
import luke from "./funkoPics/comicLuke.jpg";
import rex from "./funkoPics/captainRex.jpg";
import yoda from "./funkoPics/christmasYoda.jpg";

const Funko = () => {
  return (
    <>
      <Navbar />
      <header>
        <h1>PICTURES OF MY FAVORITE FUNKO POPS</h1>

        <img src={rex} alt="Captain Rex" />
        <img src={yoda} alt="Yoda Vs Grievous" />
        <img src={luke} alt="Luke from the Comics" />
        <img src={grogu} alt="Grogu" />
        <img src={boba} alt="Red Chrome Boba Fett" />
        <img src={chewy} alt="Golden Chewbacca Autographed by Peter Mayhew" />
      </header>
    </>
  );
};

export default Funko;
