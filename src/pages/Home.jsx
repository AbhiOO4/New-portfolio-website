
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import VideoBg from '../components/VideoBg'
import Skills from '../components/Skills'

function Home({ setIsChecked, isChecked }) {
    return (
        <div className=''>
            <Navbar setIsChecked={setIsChecked} isChecked={isChecked} />
            <>
                <section
                    id="about"
                    className="min-h-screen"
                > 
                    <VideoBg>
                        <HeroSection />
                    </VideoBg>
                </section>

                <section id="skills" className="min-h-screen flex items-center justify-center bg-base-200">
                    <Skills/>
                </section>

                <section id="projects" className="min-h-screen flex items-center justify-center">
                    <h1 className="text-4xl font-bold">Projects</h1>
                </section>

                <footer id="contact" className="min-h-screen flex items-center justify-center bg-base-200">
                    <h1 className="text-4xl font-bold">Contact</h1>
                </footer>
            </>
        </div>
    )
}

export default Home
