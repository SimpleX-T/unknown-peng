import { useState } from "react";
import { FaChevronRight,FaChevronLeft, FaLink } from "react-icons/fa6";

function NavBar({ navigation }) {
	const [currentLevel, setCurrentLevel] = useState([navigation]);
	const [currentTitles, setCurrentTitles] = useState(navigation);

	const handleItemClick = (item) => {
		if (item.url) {
			// Navigate to URL (in a real app, you'd use a router here)
			console.log(`Navigating to: ${item.url}`);
		} else if (item.children) {
			setCurrentLevel([...currentLevel, item.children]);
			setCurrentTitles(item.children);
		}
	};

	const handleBackClick = () => {
		if (currentLevel.length > 1) {
			const newLevel = currentLevel.slice(0, -1);
			setCurrentLevel(newLevel);
			setCurrentTitles(newLevel[newLevel.length - 1]);
		}
	};

	return (
		<nav className='w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
			{currentLevel.length > 1 && (
				<button
					onClick={handleBackClick}
					className='w-full p-4 bg-gray-100 text-left flex items-center text-gray-700 hover:bg-gray-200'>
					<FaChevronLeft className='mr-2' />
					Back to {currentLevel[currentLevel.length - 2][0].title}
				</button>
			)}
			<ul>
				{currentTitles.map((item, index) => (
					<li key={index}>
						<button
							onClick={() => handleItemClick(item)}
							className='w-full p-4 text-left border-b border-gray-200 hover:bg-gray-50'>
							{item.title}
							{item.children ? (
								<span className='float-right'><FaChevronRigh className='mr-2' t/></span>
							) : <span className='float-right'><FaLink className='mr-2' /></span>}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
export default NavBar;
