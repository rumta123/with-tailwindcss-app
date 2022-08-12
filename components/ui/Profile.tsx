import Link from "next/link";

function Profile(props) {


    return (

        <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                </div>
            </label>
            <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <Link href="">
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a>
                            Settings
                        </a>
                    </Link >
                </li>
                <li>
                    <Link href="">
                        <a>Logout</a>
                    </Link>
                </li>
            </ul>
        </div >
    );
};

export default Profile;
