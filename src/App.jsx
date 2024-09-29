import { useState } from 'react'
import Header from './components/Header'
import initialEmails from './data/emails'

import './styles/App.css'
import emails from './data/emails'

/*
<li className="email">


  <div className="select">
	<input
	  className="select-checkbox"
	  type="checkbox"/>
  </div>


  <div className="star">
	<input
	  className="star-checkbox"
	  type="checkbox"
	/>
  </div>
  <div className="sender"></div>
  <div className="title"></div>
</li>
*/


function App() {
  const [emails, setEmails] = useState(initialEmails)

  
  const toggleRead = (target) => {
    const updatedEmail = emails.map((email) => 
      email === target ? {...email, read: !email.read} : email
    );
    setEmails(updatedEmail) 
    console.log(updatedEmail)
    }
    
  const toggleStar = (target) => {
    const updatedEmail = emails.map((email) => 
      email === target ? {...email, starred: !email.starred} : email
  )
  setEmails(updatedEmail)
  console.log(updatedEmail)
  }
    

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>

      </nav>
      <main className="emails">
        <ul>
        {emails.map((email, index) => (
          <li className="email" key={index}>
            <div className="select">
            <input
              className="select-checkbox"
              name = "select-checkbox"
              type="checkbox"
              checked={email.read}
              onChange={() => {toggleRead(email) }}
              />
            </div>
            <div className="star">
            <input
              className="star-checkbox"
              name="star-checkbox"
              type="checkbox"
              checked={email.starred}
              onChange={()=> {toggleStar(email) }}
              />

          </div>
          <div className="sender">{email.sender}</div>
          <div className="title">{email.title}</div>
        </li>
        ))}
        </ul>

      </main>
    </div>
  )
}

export default App
