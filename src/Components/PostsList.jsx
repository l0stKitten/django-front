import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Post from './Post'
import ChatsandContact from './ChatsandContact';
import CreatePost from './CreatePost';
import Typography from '@mui/material/Typography';
import {URL_F} from "../config"
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

import { createTheme, styled, useTheme } from '@mui/material/styles';

const DrawerFooter = styled('div')(({ theme }) => ({
	display: 'flex',
	width: '100%', 
	alignItems: 'center',
	alignContent: 'center',
	justifyContent: 'center',
	padding: 2,
	bottom: 0, 
	textAlign: 'center',
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));


export default function PostsList() {

	const isXs = useMediaQuery('(max-width:996px)'); // Adjust the width to match your "xs" breakpoint

	const [postsListData, setPostList] = useState([]);
	

	useEffect(() => {
		const getPosts = async () => {
			try { 
				const response = await axios.get(URL_F + "api/v1/all", {}, {withCredentials: true});
	
				console.log(response.data);
				setPostList(response.data.results);
			} catch (error) {
				console.error(error);
			}
		};
	
		getPosts();
	}, []);
	

	return (
		<Grid container spacing={2} marginRight={2}>
			<Grid container item xs={isXs ? 12 : 10} 
				direction="column"
				justifyContent="flex-start"
				alignItems="center"
				gap={4}
			>
				<CreatePost setPostList={setPostList}></CreatePost>
				
				{postsListData.length > 0 && postsListData.sort((a, b) => new Date(b.createdat) - new Date(a.createdat)).map((post) => (
					<Post key={post.id} user_id={post.user_id} createdat={post.createdat} description={post.description} videopath={post.videopath} ></Post>
				))}

			</Grid>
			{isXs ? null : <Grid item xs={2} container
				direction="column"
				justifyContent="flex-start"
				alignItems="flex-end">
				
				<ChatsandContact></ChatsandContact>
				
			</Grid>}
			
				<DrawerFooter>
					<Typography variant="body2"> © Crazy Challenge </Typography>
				</DrawerFooter>
				
		</Grid>
	);
}