import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to = '/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/lego'>My Legos</Link>
        <Link to='/funko'>My Funko Pops</Link>
        <a href="https://www.starwars.com/films">Star Wars Movies</a>
        <a href="https://www.starwars.com/series">Star Wars TV</a>
        <a href="https://en.wikipedia.org/wiki/List_of_Star_Wars_books"
          >Star Wars Books</a
        >
        <a href="https://www.sideshow.com/brands/star-wars"
          >Star Wars Collectibles</a
        >
    </nav>
  )
}

export default Navbar