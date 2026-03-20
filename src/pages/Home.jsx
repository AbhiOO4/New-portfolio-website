
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import VideoBg from '../components/VideoBg'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'
import ModusScreenshot from '../assets/Modus.png'
import Mindflow from '../assets/Mindflow.png'
import Yelpcamp from '../assets/Yelpcamp.png'
import Contact from '../components/Contact'

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
                    <Skills />
                </section>

                <section id="projects" className="min-h-screen flex items-center justify-center">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                        <ProjectCard
                            title={"Modus - Task Manager"}
                            description={
                                "A modern full-stack productivity web app that helps users manage tasks, track progress, and break down tasks to managable subtasks with the help of AI with a clean and responsive UI."
                            }
                            techStack={[
                                "React",
                                "Tailwind CSS",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "JWT Auth",
                                "Daisy-ui"
                            ]}
                            liveLink={"https://modus.abhinavsreejith.online/"}
                            gitLink={"https://github.com/AbhiOO4/Modus-task-manager-ai"}
                            screenShot={ModusScreenshot}
                        />
                        <ProjectCard
                            title={"MindFlow - Online Note-taker"}
                            description={
                                "An online note taking app to view you notes from anywhere, anytime using anydevice."
                            }
                            techStack={[
                                "React",
                                "Tailwind CSS",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "JWT Auth"
                            ]}
                            liveLink={"https://think-board-ogkh.onrender.com/"}
                            gitLink={"https://github.com/AbhiOO4/Mind-Flow"}
                            screenShot={Mindflow}
                        />
                        <ProjectCard
                            title={"Yelp-camp"}
                            description={
                                "A place where you can create, review and list campground around the world. A basic tutorial project i made when learning fundamentals of fullstack development which helped me stitch everything together in my mind."}
                            techStack={[
                                "EJS",
                                "Bootstrap CSS",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "Maptiler"
                            ]}
                            liveLink={"https://yelp-camp-clone.onrender.com/"}
                            gitLink={"https://github.com/AbhiOO4/Yelp-camp-clone"}
                            screenShot={Yelpcamp}
                        />
                        
                    </div>
                </section>

                <footer id="contact" className="min-h-screen flex items-center justify-center bg-base-200">
                    <Contact/>
                </footer>
            </>
        </div>
    )
}

export default Home
