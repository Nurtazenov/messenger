import './style.css'
import { setLogin } from './Auth/login.ts'
import { setProfile } from './profile/profile.ts'
const isUserActive:boolean = true
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <section>
      <div id="main">

      </div>
   </section>
  </div>

`
if(isUserActive === true){
  setProfile(document.querySelector<HTMLDivElement>('#main')!)
} else if(isUserActive === false){
  setLogin(document.querySelector<HTMLDivElement>('#main')!)
}
{isUserActive ?  setProfile(document.querySelector<HTMLDivElement>('#main')!)
  :
 setLogin(document.querySelector<HTMLDivElement>('#main')!)
} 
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
