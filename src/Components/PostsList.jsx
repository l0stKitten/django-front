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
	
	useEffect( () => { 
		
		async function getPosts() {
			axios.defaults.withCredentials = true;
			await axios.get(URL_F + "api/v1/all")
			.then((response) => {
				console.log(response.data)
				setPostList(response.data.results)
			}).catch((error) => {
				console.log(error)
			});
		}

		getPosts()
		
	}, [])

	return (
		<Grid container spacing={2} marginRight={2}>
			<Grid container item xs={isXs ? 12 : 10} 
				direction="column"
				justifyContent="flex-start"
				alignItems="center"
				gap={4}
			>
				<CreatePost></CreatePost>
				
				{postsListData.length > 0 && postsListData.map((post) => (
					<span key={post.id}> {post.id} </span>
					/*<Post key={index}>xs=8</Post>*/
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