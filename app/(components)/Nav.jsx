import { faHome, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);

  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
        {session && <Link href="/CreateUser">Create User</Link>}
        <Link href="/ClientMember">
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
        <Link href="/Member">
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
        <Link href="/Public">
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
      </div>
      <div>
        {session ? (
          <Link
            className="text-default-text"
            href={"/api/auth/signout?callbackUrl=/"}
          >
            Logout
          </Link>
        ) : (
          <Link className="text-default-text" href={"/api/auth/signin"}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
