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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import registerBackground from "../../Assets/registerBackground.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
	const [workingIndustry, setWorkingIndustry] = React.useState("");
	const [workOrStu, setWorkOrStu] = React.useState("working");
	console.log(workOrStu);
	const [interestedIndustries, setInterestedIndustries] = React.useState<
		string[]
	>([]);
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const industries = ["Banking", "FinTech", "ICT"];
	const navigate = useNavigate();

	const handleChange = (
		event: SelectChangeEvent<typeof interestedIndustries>
	) => {
		const {
			target: { value },
		} = event;
		setInterestedIndustries(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	const submitRegister = async () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				const docRef = await addDoc(collection(db, "users"), {
					email: email,
					firstName: firstName,
					lastName: lastName,
					workingIndustry: workingIndustry,
					interestedIndustries: interestedIndustries,
					workOrStudent: workOrStu,
				});
				// Signed in
				const user = userCredential.user;
				console.log(user);
				navigate("/home");

				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				// ..
			});
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
										Get Started.
									</Typography>
									<Stack direction="row" alignItems="center">
										<Typography gutterBottom className="Register__subtitle">
											Already have an account?
										</Typography>
										<Typography
											gutterBottom
											marginLeft={2}
											className="Register__subtitle"
										>
											<Link to="/login">Login</Link>
										</Typography>
									</Stack>
								</Box>
								<Stack
									direction="row"
									spacing={4}
									// justifyContent="space-between"
								>
									<TextField
										label="First Name"
										InputLabelProps={{
											shrink: true,
										}}
										variant="standard"
										onChange={(e) => setFirstName(e.target.value)}
									/>
									<TextField
										label="Last Name"
										InputLabelProps={{
											shrink: true,
										}}
										variant="standard"
										onChange={(e) => setLastName(e.target.value)}
									/>
								</Stack>
								<TextField
									label="Email"
									InputLabelProps={{
										shrink: true,
									}}
									variant="standard"
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
								<Box>
									<Typography gutterBottom className="Register__fieldLabel">
										Are you working / a student?
									</Typography>
									<RadioGroup
										row
										// defaultValue="working"
										name="radio-buttons-group"
										value={workOrStu}
										onChange={(e) => setWorkOrStu(e.target.value)}
									>
										<FormControlLabel
											value="working"
											control={<Radio size="small" />}
											label={
												<Typography className="Register__fieldLabel">
													Working
												</Typography>
											}
										/>
										<FormControlLabel
											value="student"
											control={<Radio size="small" />}
											label={
												<Typography className="Register__fieldLabel">
													Student
												</Typography>
											}
											className="Register__fieldLabel"
										/>
									</RadioGroup>
								</Box>
								<Stack spacing={1}>
									<Typography className="Register__fieldLabel">
										What is your working industry?
									</Typography>
									<FormControl variant="standard">
										<Select
											value={workingIndustry}
											label="working industry"
											onChange={(e) => setWorkingIndustry(e.target.value)}
											sx={{ fontSize: 14 }}
										>
											{industries.map((industry) => (
												<MenuItem key={industry} value={industry}>
													{industry}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Stack>
								<Stack spacing={1}>
									<Typography className="Register__fieldLabel">
										What is/are your interested industry(ies)?
									</Typography>
									<FormControl variant="standard">
										<Select
											labelId="demo-multiple-chip-label"
											id="demo-multiple-chip"
											multiple
											value={interestedIndustries}
											onChange={handleChange}
											input={<Input id="select-multiple-chip" />}
											renderValue={(selected) => (
												<Box
													sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
												>
													{selected.map((value) => (
														<Chip
															key={value}
															label={value}
															sx={{
																borderRadius: "5px",
																height: 30,
																color: "white",
																backgroundColor: "#0B5286",
															}}
														/>
													))}
												</Box>
											)}
										>
											{industries.map((industry) => (
												<MenuItem key={industry} value={industry}>
													<Checkbox
														checked={
															interestedIndustries.indexOf(industry) > -1
														}
													/>
													{industry}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Stack>
							</Stack>
							<Button
								variant="outlined"
								sx={{ width: 100, marginTop: 10, marginLeft: 5 }}
								onClick={() => {
									submitRegister();
								}}
							>
								Register
							</Button>
						</CardContent>
					</Box>
				</Card>
			</Box>
		</div>
	);
};

export default Register;
