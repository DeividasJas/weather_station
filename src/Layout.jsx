import { NavLink, Outlet } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Layout() {
  return (
    <>
      <nav>
        <ul className=' flex justify-around pt-5 mb-4 max-w-screen-lg mx-auto'>
            <NavLink to={'/'}>
                <li className='px-4 py-2 rounded-lg text-pretty text-xl bg-slate-900 text-zinc-300 border border-blue-400'>About</li>
            </NavLink>
            <NavLink to={'/weather'}>
                <li className='px-4 py-2 rounded-lg text-pretty text-xl bg-slate-900 text-zinc-300 border border-blue-400'>Weather</li>
            </NavLink>
            <li>
                <div className="dropdown dropdown-hover rounded-lg" data-theme='light'>
                    <div tabIndex={0} role="button" className="px-4 py-2 rounded-lg text-pretty text-xl bg-slate-900 text-zinc-300 border border-blue-400">Socials</div>
                        <ul tabIndex={1} className="dropdown-content menu rounded-box z-[1] w-30 divide-y p-2 shadow mr-5 bg-slate-900 text-zinc-300">
                            <li>  <a href='https://www.linkedin.com/in/deividasjasas/' target='_blank'><LinkedInIcon/>LinkedIn</a></li>
                            <li><a href='https://github.com/DeividasJas' target='_blank'><GitHubIcon/>GitHub</a></li>
                            <li><a href='https://www.instagram.com/gamerdeiver/' target='_blank'><InstagramIcon/>Instagram</a></li>
                        </ul>
                    </div>
            </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
