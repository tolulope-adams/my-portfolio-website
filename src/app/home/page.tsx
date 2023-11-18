
import "./page.css";

import Image from 'next/image';
import Header from "./header";
import ConsoleText from "./console-text";
import Carousel from "./carousel";
import ProjectItem from './project-item';
import Form from './form';
// icons
import MyPicture from '../asset/icons/my-picture.jpg';
import Github from '../asset/icons/github.svg';
import Linkedin from '../asset/icons/linkedin.svg';
import Resume from '../asset/icons/resume.svg';

export default function Home() {
    return (
        <main className="bg-white">
            <section className="w-screen h-screen flex flex-col items-center justify-items-center">
                <h1 className="text-3xl text-center txt-gradient font-bold tracking-wider">Hi</h1>
                <ConsoleText className="text-2xl text-center txt-gradient font-bold tracking-wider"
                    words={['Tolulope Adams', 'a Software Engineer', 'a Data Analyst', 'a Muslim']}
                />
                <div className="flex flex-row gap-8">
                    <a href="https://github.com/tolulope-adams" target="_blank" rel="noopener noreferrer">
                        <Image className="w-8 h-8" alt="Github" src={Github} />
                    </a>
                    <a href="https://www.linkedin.com/in/tolulope-adams" target="_blank" rel="noopener noreferrer">
                        <Image className="w-8 h-8" alt="Linkedin" src={Linkedin} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Image className="w-8 h-8" alt="Download CV" src={Resume} />
                    </a>
                </div>
            </section>
            <section className="bg-gradient text-white">
                <Header title="ABOUT ME" hasGradient={false} />
                <div className="text-white">
                    <p className="text-base font-light tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.
                        <br /><br />
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat
                        <br /><br />
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat
                    </p>
                </div>
            </section>
            <section>
                <Header title="EXPERTISE" hasGradient />
                <Carousel />
            </section>
            <section className="bg-gradient text-white">
                <Header title="PROJECTS" hasGradient={false} />
                <div className="flex flex-col gap-10">
                    <ProjectItem tags={["Java", "Spring Boot", "SQL"]} />
                    <ProjectItem tags={["Java", "Spring Boot", "SQL"]} />
                </div>
            </section>
            <section>
                <Header title="CONTACT ME" hasGradient />
                <p className="text-base txt-gradient font-normal">
                    If you&apos;d like get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below.
                </p>
                <Form />
            </section>
        </main>
    )
}