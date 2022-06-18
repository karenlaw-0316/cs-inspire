import React from "react";
import {
	Box,
	Card,
	CardMedia,
	CardContent,
	CardActions,
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
	Link,
	Input,
	OutlinedInput,
	FormControl,
} from "@mui/material";
import Landing from "../../Assets/Landing.png";
// import './App.css';

const Register = () => {
	const [workingIndustry, setWorkingIndustry] = React.useState("banking");
	const [personName, setPersonName] = React.useState<string[]>([]);

	const names = [
		"Oliver Hansen",
		"Van Henry",
		"April Tucker",
		"Ralph Hubbard",
		"Omar Alexander",
		"Carlos Abbott",
		"Miriam Wagner",
		"Bradley Wilkerson",
		"Virginia Andrews",
		"Kelly Snyder",
	];

	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		const {
			target: { value },
		} = event;
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	return (
		<div
			style={{
				height: "100vh",
				alignItems: "center",
				justifyContent: "center",
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
							sx={{ width: "40%" }}
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
									<Typography gutterBottom variant="h5" component="div">
										Get Started
									</Typography>
									<Stack direction="row" alignItems="center">
										<Typography gutterBottom variant="h6">
											Already have an account?
										</Typography>
										<Typography gutterBottom variant="h6" marginLeft={2}>
											<Link href="#">Login</Link>
										</Typography>
									</Stack>
								</Box>
								<Stack direction="row" spacing={2}>
									<TextField
										label="First Name"
										InputLabelProps={{
											shrink: true,
										}}
										variant="standard"
									/>
									<TextField
										label="Last Name"
										InputLabelProps={{
											shrink: true,
										}}
										variant="standard"
									/>
								</Stack>
								<Box>
									<Typography gutterBottom variant="body1">
										Are you working / a student?
									</Typography>
									<RadioGroup
										row
										defaultValue="working"
										name="radio-buttons-group"
									>
										<FormControlLabel
											value="working"
											control={<Radio />}
											label="Working"
										/>
										<FormControlLabel
											value="student"
											control={<Radio />}
											label="Student"
										/>
									</RadioGroup>
								</Box>
								<Stack spacing={1}>
									<Typography variant="body1" color="text.secondary">
										What is your banking industry?
									</Typography>
									<FormControl variant="standard">
										<Select value={workingIndustry} label="working industry">
											<MenuItem value={"banking"}>Banking</MenuItem>
										</Select>
									</FormControl>
								</Stack>
								<Stack spacing={1}>
									<Typography variant="body1" color="text.secondary">
										What is/are your interested industry/industries?
									</Typography>
									<FormControl variant="standard">
										<Select
											labelId="demo-multiple-chip-label"
											id="demo-multiple-chip"
											multiple
											value={personName}
											onChange={handleChange}
											input={<Input id="select-multiple-chip" />}
											renderValue={(selected) => (
												<Box
													sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
												>
													{selected.map((value) => (
														<Chip key={value} label={value} />
													))}
												</Box>
											)}
										>
											{names.map((name) => (
												<MenuItem key={name} value={name}>
													{name}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Stack>
							</Stack>
							<Button
								variant="outlined"
								sx={{ width: 100, borderRadius: 5, marginLeft: 5 }}
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
