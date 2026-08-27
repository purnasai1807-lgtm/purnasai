'use client'
import {useEffect,useState} from 'react'
import {ArrowDown,ArrowUp,ArrowUpRight,Briefcase,Code2,Gamepad2,GraduationCap,Mail,MapPin,Menu,Phone,Play,Terminal, Trophy, X} from 'lucide-react'

const projects=[
 {tag:'MISSION 01',title:'DelayGuard',desc:'Predictive analytics project focused on early detection and monitoring of land-acquisition delays.',stack:'Predictive Analytics • ML',tone:'pink',link:'https://agent-6a8a44f6e974de5f413dd862--spih-096.netlify.app/'},
 {tag:'MISSION 02',title:'Chitflow',desc:'A modern web project built as part of the portfolio mission lineup.',stack:'Web Application',tone:'cyan',link:'https://chitflow-pro-20260429221704.vercel.app/'},
 {tag:'MISSION 03',title:'Jarvis — Next Mission',desc:'The next major mission: building a personal AI assistant inspired by futuristic digital assistants, with automation, voice and modular tools.',stack:'AI • Python • Automation',tone:'purple'},
]
const skills=['Python','JavaScript','HTML / CSS','React','Next.js','SQL','Machine Learning','Data Visualization','Git & GitHub','Streamlit','Flutter','AI / Automation']
const socialLinks=[
  {label:'LinkedIn', url:'https://www.linkedin.com/in/purna-sai-avvaru-803868377/'},
  {label:'GitHub', url:'https://github.com/purnasai1807-lgtm'},
  {label:'Email', url:'mailto:purnasai1807@gmail.com'},
  {label:'Phone', url:'tel:+919948476542'},
]

export default function Home(){
 const [menu,setMenu]=useState(false),[time,setTime]=useState(''),[sound,setSound]=useState(false),[active,setActive]=useState(null)
 useEffect(()=>{const tick=()=>setTime(new Intl.DateTimeFormat('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date()));tick();const i=setInterval(tick,1000);return()=>clearInterval(i)},[])
 const go=id=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'})}
 return <main>
  <div className="grain"/>
  <header className="hud"><button className="brand" onClick={()=>go('home')}><span>PS</span><small>PORTFOLIO // 2026</small></button><nav className={menu?'open':''}>{['home','about','missions','skills','contact'].map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}</nav><div className="hudRight"><span className="clock">{time}</span><button className="sound" onClick={()=>setSound(!sound)}>{sound?'SOUND ON':'SOUND OFF'}</button><button className="hamb" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
  <section id="home" className="hero">
   <div className="sun"/><div className="palm p1">♧</div><div className="palm p2">♧</div>
   <div className="heroCopy"><div className="eyebrow">HYDERABAD, TELANGANA // PLAYER PROFILE</div><h1>PURNA<br/><em>SAI</em></h1><p className="lead">ENGINEERING × AI × DIGITAL CHAOS</p><p className="sub">Based in Hyderabad, I build immersive digital products with neon energy, product thinking, and code that feels as sharp as the city skyline after dark.</p><div className="actions"><button className="primary" onClick={()=>go('missions')}><Play size={16}/> START EXPLORING</button><button className="ghost" onClick={()=>go('contact')}>CONTACT ME <ArrowUpRight size={16}/></button></div><div className="socialRail">{socialLinks.map((item)=><a key={item.label} href={item.url} target={item.url.startsWith('http') ? '_blank' : undefined} rel={item.url.startsWith('http') ? 'noreferrer' : undefined}>{item.label}</a>)}</div></div>
   <div className="heroCard"><div className="cardTop"><span>WANTED</span><span>LEVEL 18+</span></div><div className="avatar"><img src="/profile.png" alt="Purna Sai" /></div><div className="cardName">A. PURNA SAI</div><div className="cardRole">FULL-STACK / AI DEVELOPER</div><div className="stats"><b><i style={{width:'88%'}}/>CODE</b><b><i style={{width:'78%'}}/>AI</b><b><i style={{width:'72%'}}/>DESIGN</b></div></div>
   <div className="scroll">SCROLL TO ENTER <ArrowDown size={14}/></div>
  </section>
  <section id="about" className="section about"><div className="sectionNo">01 / EDUCATION</div><div><p className="kicker">PLAYER BACKGROUND</p><h2>Built through<br/><span>education.</span></h2><p className="body">My academic journey is the foundation behind the work I build today.</p><div className="facts"><div><strong>B.TECH</strong><span>ACE Engineering College</span></div><div><strong>INTER</strong><span>Sarath Junior College</span></div><div><strong>SCHOOL</strong><span>St Joseph High School</span></div></div></div></section>
  <section id="missions" className="section missions"><div className="sectionNo">02 / MISSIONS</div><div className="missionHead"><div><p className="kicker">SELECTED WORK</p><h2>Mission <span>Board</span></h2></div><p>Three missions. One objective:<br/>make useful things feel unforgettable.</p></div><div className="grid">{projects.map((p,i)=><button className={'mission '+p.tone} key={p.title} onClick={()=>setActive(p)}><span className="missionIndex">0{i+1}</span><div className="missionIcon">{i===0?<Briefcase/>:i===1?<Code2/>:<Gamepad2/>}</div><p>{p.tag}</p><h3>{p.title}</h3><span className="stack">{p.stack}</span><ArrowUpRight className="arrow"/></button>)}</div></section>
  <section id="skills" className="section skills"><div className="sectionNo">03 / LOADOUT</div><div><p className="kicker">CURRENT LOADOUT</p><h2>Tools of the <span>trade.</span></h2><div className="skillCloud">{skills.map((s,i)=><div className="skill" key={s}><span>0{i+1}</span>{s}</div>)}</div></div></section>
  <section className="quote"><div className="quoteMark">“</div><p>GOOD SOFTWARE ISN’T JUST BUILT.<br/><span>IT’S EXPERIENCED.</span></p></section>
  <section id="contact" className="section contact"><div className="sectionNo">04 / CONTACT</div><div className="contactGrid"><div><p className="kicker">FINAL MISSION</p><h2>Let’s build<br/><span>something wild.</span></h2><p className="body">Based in Hyderabad, I’m open to product work, internships, collaborations, and ambitious ideas that need speed, clarity, and a strong visual presence.</p></div><div className="contactCard"><div className="contactLine"><Mail/><div><small>EMAIL</small><a href="mailto:purnasai1807@gmail.com">purnasai1807@gmail.com</a></div></div><div className="contactLine"><Phone/><div><small>PHONE</small><a href="tel:+919948476542">+91 99484 76542</a></div></div><div className="contactLine"><MapPin/><div><small>BASE</small><span>Hyderabad, Telangana</span></div></div><div className="contactLine"><Terminal/><div><small>PROFILE</small><a href="https://www.linkedin.com/in/purna-sai-avvaru-803868377/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com/purnasai1807-lgtm" target="_blank" rel="noreferrer">GitHub</a></div></div><button className="primary wide" onClick={()=>window.location.href='mailto:purnasai1807@gmail.com?subject=Portfolio%20Opportunity'}>SEND TRANSMISSION <ArrowUpRight size={17}/></button></div></div></section>
  <footer><span>© 2026 PURNA SAI</span><span>HYDERABAD • BUILT WITH CODE & CAFFEINE</span><button onClick={()=>go('home')}><ArrowUp size={15}/> BACK TO TOP</button></footer>
  {active&&<div className="modal" onClick={()=>setActive(null)}><div className="modalBox" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setActive(null)}><X/></button><span>{active.tag}</span><h2>{active.title}</h2><p>{active.desc}</p><strong>{active.stack}</strong>{active.link&&<a className="primary" href={active.link} target="_blank" rel="noreferrer">OPEN PROJECT <ArrowUpRight size={17}/></a>}<button className="primary" onClick={()=>setActive(null)}>CLOSE MISSION</button></div></div>}
 </main>
}
