import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
    </div>
  );
};

export default Header;
