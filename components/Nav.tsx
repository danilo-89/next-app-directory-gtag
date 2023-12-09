import Link from 'next/link';

function Nav() {
	return (
		<div className='fixed bg-violet-700 p-5 w-full'>
			<ul className='flex w-full justify-evenly'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/details'>Details</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
