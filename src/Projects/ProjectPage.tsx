import '../styles/style.css'
import ProjectSection from './ProjectSection';


const ProjectPage = () => {
    return (
        <>
            <ProjectSection
                title={'Website for Fare & Feed Breakfast Bar'}
                description=
                {
                    <p>Pokedex app developed in Kotlin for Android.
                        The Pokedex creates Pokemon objects using data retreived from <a href="https://pokeapi.co"
                            target="_blank">PokeAPI.</a>
                    </p>
                }
                link={'https://github.com/PhilEdie/Fare-and-Feed-Breakfast-Bar'}
                image={'images/FareAndFeed.JPG'}
                imageAlt={"A screenshot of Fare & Feed Breakfast Bar's restaurant menu page."}
            />
            <ProjectSection
                title={'Pokedex App'}
                description=
                {
                    <div className="project--pokedex_text">
                        <p>Pokedex app developed in Kotlin for Android. The Pokedex creates Pokemon objects using data retreived from
                            <a href="https://pokeapi.co" target="_blank">PokeAPI.</a>
                        </p >
                        <p>
                            The Pokedex contains all 898 Pokemon. Users can click a Pokemon to display its species info, a brief
                            description, and its stats.
                            Users can search for Pokemon using either the Pokemon's name or ID.</p>
                    </div>
                }
                link={'https://github.com/PhilEdie/Pokedex'}
                image={'images/pokedex.gif'}
                imageAlt={"Demo footage of the Pokedex app."}
            />
            <ProjectSection
                title={'Loan & Investment Optimiser'}
                description=
                {
                    <>
                        <p>
                            A tool developed in Java which allows users to find the optimum distribution of
                            payments across multiple loans and investments to maximize overall net worth.
                        </p>
                        <p>
                            Users can enter as many loans or investments as needed. The program then makes minimum payments on each
                            loan,
                            then distributes the remaining funds to the accounts with the highest interest rates.
                        </p>
                    </>
                }
                link={'https://github.com/PhilEdie/Investment-and-Loan-Optimiser'}
                image={'images/Investment Loan Optimiser.jpg'}
                imageAlt={'A screenshot of the accounts entry screen.'} />
        </>
    );
};

export default ProjectPage;



