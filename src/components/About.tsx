import React from 'react'
import { BackgroundLines } from './ui/BackgroundLines'
import { CodeBlock } from './ui/CodeBlock'

const About = () => {
    const code = `const silentproton = {
    pronouns: "He" | "Him",
    code: ["TypeScript", "Javascript", "Python", "Rust"],
    askMeAbout: ["web dev", "app dev", "cloud computing", "UI/UX", "tech trends"],
    technologies: {
        frontEnd: {
            js: ["React", "Next.js"],
            css: ["Sass", "Tailwind", "Bootstrap"],
            uiLibraries: ["Material UI", "Ant Design", "Chakra UI"],
        },
        backEnd: {
            js: ["Node", "Express", "NestJS"],
            python: ["Flask"],
        },
        mobileApp: {
            crossPlatform: ["React Native"],
        },
        devOps: ["Docker🐳", "CI/CD", "Nginx", "GitHub Actions"],
        databases: ["PostgreSQL", "MongoDB", "SQLite"],
        misc: ["Socket.IO", "REST APIs", "WebSockets", "Cloud Functions"],
        generativeAI: ["GPT"],
    },
    architecture: {
        databases: ["Relational", "NoSQL", "In-memory"],
    },
    currentFocus: "Trying to build things with Typescript",
    funFact: "On the way to become Software Developer"
};`;

    return (
        <section id="about" className="w-full px-4 py-10">
            <div className="max-w-full overflow-x-auto">
                <div className="mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
                    <CodeBlock
                        language="typescript"
                        filename="SilentProton.md"
                        highlightLines={[0]}
                        code={code}
                    />
                </div>
            </div>
        </section>
    )
}

export default About