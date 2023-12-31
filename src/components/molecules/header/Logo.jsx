import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="logo flex">
            <Link to="/">
                Tengo todo para ser grande
            </Link>
        </div>
    )
}

export default Logo;