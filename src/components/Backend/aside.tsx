import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export default function Aside() {
  const router = useRouter();

  function cerrarSesion() {
    signOut({ callbackUrl: '/' })
  }

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/admin/dashboard" title="home">
            <strong className="block font-extrabold text-green-500 text-2xl	">
              Bamboo Express
            </strong>
          </Link>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          <li>
            <Link href="/admin/dashboard" aria-label="dashboard" className={
              router && router.pathname === "/admin/dashboard"
                ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-lime-600 to-green-400"
                : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group "
            }>
              <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-green-400 dark:fill-slate-600"></path>
                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-green-200 group-hover:text-green-300"></path>
                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
              </svg>
              <span className="-mr-1 font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/order" className={
              router && router.pathname === "/admin/dashboard/order"
                ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-lime-600 to-green-400"
                : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 group-hover:text-green-600" viewBox="0 0 1024 1024" fill="currentColor">
                <path d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z" />
                <path d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z" />
                <path d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z" />
              </svg>
              <span className="group-hover:text-gray-700">Orders</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/reservation" className={
              router && router.pathname === "/admin/dashboard/reservation"
                ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-lime-600 to-green-400"
                : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className="fill-current text-gray-600 group-hover:text-green-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path className="fill-current text-gray-300 group-hover:text-green-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span className="group-hover:text-gray-700">Reservation</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/category" className={
              router && router.pathname === "/admin/dashboard/category"
                ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-lime-600 to-green-400"
                : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className="fill-current text-gray-300 group-hover:text-green-300" fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                <path className="fill-current text-gray-600 group-hover:text-green-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
              </svg>
              <span className="group-hover:text-gray-700">Categories</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/food" className={
              router && router.pathname === "/admin/dashboard/food"
                ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-lime-600 to-green-400"
                : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 group-hover:text-green-600" viewBox="0 -14.02 63 63" fill="currentColor">
                <g id="_28" data-name="28" transform="translate(-403.5 -858.023)">
                  <path d="M465.217,888.857H404.779a1.281,1.281,0,0,0,0,2.561h4.076a1.6,1.6,0,0,0,1.487,1.559h48.752a1.6,1.6,0,0,0,1.488-1.559h4.635a1.281,1.281,0,1,0,0-2.561Z" />
                  <path d="M459.6,886.721c0-12.342-9.754-22.35-21.784-22.35h-4.183c-12.035,0-21.785,10.008-21.785,22.35v.8H459.6Zm-27.1-18.461c-15.351,1.336-15.435,16.027-15.432,16.654a.687.687,0,1,1-1.373.007c0-.166.057-16.58,16.686-18.032a.688.688,0,0,1,.119,1.371Z" />
                  <path d="M434.051,862.811h3.008a2.394,2.394,0,0,0,0-4.788h-3.008a2.394,2.394,0,0,0,0,4.788Zm-1.487-2.816a.771.771,0,1,1,1.541,0v1.152a.771.771,0,1,1-1.541,0Z" />
                </g>
              </svg>
              <span className="group-hover:text-gray-700">Dishes</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group" onClick={cerrarSesion}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="group-hover:text-gray-700">Sign out</span>
        </button>
      </div>
    </aside>
  )
}
