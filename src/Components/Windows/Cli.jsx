import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = () => {
  return (
    <div>
      <MacWindow>
        <div className="cli-window">
            <Terminal 
                command={{
                    echo: {
                        description: 'Echo a passed string.',
                        usage: 'echo <string>',
                        fn: (...args) => args.join(' ')
                    }
                }}
                welcomeMessage={'Welcome to react Terminal'}
                promptLabel={'vishalnaidu:~$'}
                promptLabelStyle={{ color: "#00ff00"}}
            />
        </div>
      </MacWindow>
    </div>
  )
}

export default Cli
