import Navbar from "./Navbar"
import headShot from "./homePics/headshot2.jpg"

const Contact = () => {
  return (
    <>
    <Navbar/>
    <img src={headShot} alt="Jacob Stout" />
    <ul>
      <li><a href="https://jedijake66.github.io/">My personal portfolio</a></li>
      <li><a href="https://www.linkedin.com/in/jacob-a-stout/">LinkedIn</a></li>
    </ul>
    
    
    </>
  )
}

export default Contact
