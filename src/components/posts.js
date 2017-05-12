import styled from "styled-components";
import { Route, Switch, } from "react-router";

import Post, { Blank, Home, FourOhFour, } from "./post";
import SideBar from "./sidebar";

const PostsStyled = styled.div`
	background-color: ${R.path(["theme", "white",])};
	flex-direction: row;
`;

export default () => (
	<PostsStyled>
		<Route path = "/post" component = { SideBar } />

		<Switch>
			<Route path = "/post/:postSlug" component = { Post } />
			<Route path = "/post/" component = { Blank } />
			<Route path = "/" exact component = { Home } />
			<Route component = { FourOhFour } />
		</Switch>

	</PostsStyled>
);
