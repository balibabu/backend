import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <div style={{color:'wheat'}}>
      <h2>Page not found!</h2>
      <p>This may happens when you are not logged in or The url is incorrect.</p>
    </div>
  )
}
