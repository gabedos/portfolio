
export default function Hamburger(props) {

    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-1000`;

    return (
        <button
        className="flex flex-col h-10 w-10 border-black rounded justify-center items-center group"
        onClick={props.toggleNavbar}
        >
        <div
            className={`${genericHamburgerLine} ${
                props.navbarOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
        />
        <div
            className={`${genericHamburgerLine} ${
                props.navbarOpen 
                ? "opacity-0"
                : "opacity-50 group-hover:opacity-100"
            }`}
        />
        <div
            className={`${genericHamburgerLine} ${
                props.navbarOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
        />
        </button>
    )
}