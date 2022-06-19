import React from "react";
import {
	Box,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Checkbox,
	Button,
	Typography,
	TextField,
	Grid,
	Stack,
	RadioGroup,
	FormControlLabel,
	Radio,
	MenuItem,
	Select,
	SelectChangeEvent,
	Chip,
	Input,
	OutlinedInput,
	FormControl,
	Divider,
} from "@mui/material";
import Landing from "../../Assets/Landing.png";
import "./style.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import registerBackground from "../../Assets/registerBackground.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const navigate = useNavigate();

	const submitSignIn = async () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate("/home");

				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});

		// createUserWithEmailAndPassword(auth, email, password)
		// 	.then(async (userCredential) => {
		// 		const docRef = await addDoc(collection(db, "users"), {
		// 			email: email,
		// 			firstName: firstName,
		// 			lastName: lastName,
		// 			workingIndustry: workingIndustry,
		// 			interestedIndustries: interestedIndustries,
		// 			workOrStudent: workOrStu,
		// 		});
		// 		// Signed in
		// 		const user = userCredential.user;
		// 		console.log(user);
		// 		// ...
		// 	})
		// 	.catch((error) => {
		// 		const errorCode = error.code;
		// 		const errorMessage = error.message;
		// 		console.log(errorMessage);
		// 		// ..
		// 	});
	};

	return (
		<div
			style={{
				height: "100vh",
				alignItems: "center",
				justifyContent: "center",
				backgroundImage: `url(${registerBackground})`,
				backgroundSize: "cover",
			}}
		>
			<Box
				sx={{
					display: "flex",
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				<Card sx={{ maxWidth: "80%", display: "flex" }}>
					<Box sx={{ display: "flex", flexDirection: "row" }}>
						<CardMedia
							component="img"
							alt="green iguana"
							height="600"
							sx={{ width: "40%", height: "100%" }}
							image={Landing}
						/>
						<CardContent
							sx={{
								width: "60%",
								justifyContent: "space-between",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Stack spacing={3} paddingX={5} marginTop={5}>
								<Box>
									<Typography
										gutterBottom
										component="div"
										className="Register__title"
									>
										Login to Continue.
									</Typography>
									<Stack direction="row" alignItems="center">
										<Typography gutterBottom className="Register__subtitle">
											Don't have an account yet?
										</Typography>
										<Typography
											gutterBottom
											marginLeft={2}
											className="Register__subtitle"
										>
											<Link to="/">Register</Link>
										</Typography>
									</Stack>
								</Box>
								<Stack spacing={3}>
									<TextField
										label="Email"
										InputLabelProps={{
											shrink: true,
										}}
										variant="standard"
										sx={{ marginTop: "15%" }}
										onChange={(e) => setEmail(e.target.value)}
									/>
									<TextField
										label="Password"
										InputLabelProps={{
											shrink: true,
										}}
										type="password"
										variant="standard"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</Stack>
							</Stack>
							<Button
								variant="outlined"
								sx={{ width: 100, marginTop: 10, marginLeft: 5 }}
								onClick={() => {
									submitSignIn();
								}}
							>
								Login
							</Button>
						</CardContent>
					</Box>
				</Card>
			</Box>
		</div>
	);
};

export default SignIn;
