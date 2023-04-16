export default function Link(props) {
    return (
        <div
            className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:px-2 [&.active]:border-primary [&.active]:text-primary"
            onClick={(e) => { e.preventDefault(); window.location.replace(`/#${props.path}`); }}
        >
            {props.children}
        </div>
    )
}