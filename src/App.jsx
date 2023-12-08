import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";

import PostsPage from "./Pages/PostsPage";
import ChallengeShortPage from "./Pages/ChallengeShortPage";
import ChallengePage from "./Pages/ChallengePage";
import ProfileEditPage from "./Pages/ProfileEditPage";
import LoginForm from "./Pages/UserLoginPage"
import RegisterForm from "./Pages/UserRegisterPage"
import WelcomePage from "./Pages/WelcomePage";
import RanksPage from "./Pages/RanksPage";
import NotFoundPage from "./Pages/404NotFound";

export default function App() {
	return (
		<Router>

		<Routes>
			<Route path="/" element={<LoginForm/>} />
			<Route path="/register" element={<RegisterForm/>} />
			<Route path="/posts" element={<PostsPage/>} />
			<Route path="/challenges" element={<ChallengePage/>} />
			<Route path="/shorts" element={<ChallengeShortPage/>} />
			<Route path="/profile" element={<ProfileEditPage/>} />
			<Route path="/welcome" element={<WelcomePage/>} />
			<Route path="/ranks" element={<RanksPage/>} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
		</Router>
	);
}