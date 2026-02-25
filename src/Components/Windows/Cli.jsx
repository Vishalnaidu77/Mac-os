import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName }) => {

  const commands = {
    about: {
      description: 'Learn about me.',
      usage: 'about',
      fn: () => `Hi! I'm Vishal Naidu, a passionate full-stack developer. I love building beautiful, functional web applications and exploring new technologies.`
    },
    projects: {
      description: 'View my projects.',
      usage: 'projects',
      fn: () => `Recent Projects:\n\n  1. Mac OS Portfolio - A macOS-inspired portfolio website\n  2. React Dashboard - Interactive analytics dashboard\n  3. E-commerce Platform - Full-stack e-commerce solution\n  4. Weather App - Real-time weather application`
    },
    skills: {
      description: 'View my technical skills.',
      usage: 'skills',
      fn: () => `Technical Skills:\n\n  Frontend: React, Vue.js, JavaScript, HTML, CSS, SCSS\n  Backend: Node.js, Express, Python, MongoDB\n  Tools: Git, Docker, VS Code, Webpack\n  Other: REST APIs, Responsive Design, UI/UX`
    },
    contact: {
      description: 'Get in touch.',
      usage: 'contact',
      fn: () => `Contact Information:\n\n  Email: vishalnaidu@example.com\n  GitHub: github.com/Vishalnaidu77\n  LinkedIn: linkedin.com/in/vishalnaidu\n  Twitter: @vishalnaidu`
    },
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    }
  }

  const welcomeMsg = `
╔════════════════════════════════════════════════════════════╗
║          Welcome to Vishal Naidu's Terminal                ║
╚════════════════════════════════════════════════════════════╝

Type 'help' to see all available commands.
Try: about, projects, skills, contact, or echo <text>
  `

  return (
    <div>
      <MacWindow windowName={windowName} >
        <div className="cli-window">
            <Terminal 
                commands={commands}
                welcomeMessage={welcomeMsg}
                promptLabel={'vishalnaidu:~$'}
                promptLabelStyle={{ color: "#00ff00"}}
            />
        </div>
      </MacWindow>
    </div>
  )
}

export default Cli
