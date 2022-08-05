import Navbar from "./Navbar";
import mando from './homePics/mandaloreWar.jpg'
import revan from "./homePics/revan.jpg"
import vader from "./homePics/vader.jpg"
import yoda from "./homePics/yodaVSgreivous.jpg"

function Home() {
  return (
    <>
      <Navbar />
      <h1>Star Wars Related Web Design</h1>
      <article class="content">
        <header class="contentHeader">
          <h3>HERE ARE SOME PICTURES</h3>
          <img src={mando} alt='mando war' />
          <img src={yoda} alt="yodaVSgreivous" />
          <img src={revan} alt="revan" />
          <img src={vader} alt="vader" />
        </header>
        <h3 class="contentHeader2">HERE ARE SOME QUOTES</h3>
        <p class="quotes">
          "Did you hear that? They've shut down the main reactor. We'll be
          destroyed for sure. This is madness! We're doomed! There'll be no
          escape for the Princess this time. What's that? Artoo! Artoo-Detoo,
          where are you? At last! Where have you been? They're heading in this
          direction. What are we going to do? We'll be sent to the spice mine of
          Kessel or smashed into who knows what! Wait a minute, where are you
          going? The Death Star plans are not in the main computer." -C-3PO
          Episode IV
        </p>

        <p class="quotes">
          "I have placed information vital to the survival of the Rebellion into
          the memory systems of this R2 unit. My father will know how to
          retrieve it. You must see this droid safely delivered to him on
          Alderaan. This is our most desperate hour. Help me, Obi-Wan Kenobi,
          you're my only hope." -Princess Leia Episode IV
        </p>
        <p class="quotes">
          "You must confront Vader. Then, only then, a Jedi will you be. And
          confront him you will." -Master Yoda Episode VI
        </p>
        <p class="quotes">
          "Yousa in big dudu this time. How wude. Yousa cannot bees hair. Dis
          army of mackineeks up dare tis new weesong!" -Jar Jar Binks Episode I
        </p>
      </article>
    </>
  );
}

export default Home;
