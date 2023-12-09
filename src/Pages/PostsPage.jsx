import React, { useState, useEffect } from 'react';

import Menu from '../Components/Menu';
import PostsList from '../Components/PostsList';

export default function PostsPage() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const dataLS = JSON.parse(localStorage.getItem('data'));
			if (data) {
				setData(dataLS);

			console.log(dataLS)
		}
	}, []);
	
	return (
		<Menu dynamicComponent={PostsList} username={data['username']} points={data['points']} avatar={data['avatar']} ></Menu>
	);
}