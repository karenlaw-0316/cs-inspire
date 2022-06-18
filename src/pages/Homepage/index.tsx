import {
	Box,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	Stack,
	Button,
	Card,
	Avatar,
	Link,
	AppBar,
	Toolbar,
	IconButton,
	TextField,
	OutlinedInput,
	InputLabel,
	InputAdornment,
	FormControl,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Logo from "../../Assets/logo.png";

// import './App.css';

const Homepage = () => {
	const navItems = [
		"Homepage",
		"Article",
		"Discussion",
		"Group",
		"Event",
		"Following",
	];

	return (
		<Box className="App" sx={{ backgroundColor: "#F9FBFC" }}>
			<AppBar
				color="inherit"
				position="static"
				sx={{
					backgroundColor: "white",
					boxShadow: "0px 4px 20px 2px rgba(236, 236, 236, 0.42)",
				}}
			>
				<Toolbar
					sx={{
						backgroundColor: "white",
						boxShadow: "0px 4px 20px 2px rgba(236, 236, 236, 0.42)",
						alignItems: "center",
						display: "flex",
						justifyContent: "space-between",
						padding: 1.5,
					}}
				>
					<img src={Logo} />
					<Typography
						variant="h5"
						fontWeight={800}
						marginBottom={1}
						color="primary"
						align="center"
						sx={{ left: "48%", position: "absolute" }}
					>
						INSPIRE
					</Typography>
					<Stack direction="row" alignItems="center" spacing={2.5}>
						<Button variant="contained" sx={{ paddingY: 1, borderRadius: 2 }}>
							<AddIcon />
							Post
						</Button>
						<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								Password
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								startAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											edge="start"
										>
											<SearchIcon />
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
					</Stack>
				</Toolbar>
			</AppBar>
			<Grid container spacing={15} padding={7.5}>
				<Grid item xs={3}>
					<Stack spacing={5}>
						<Box
							sx={{
								backgroundColor: "white",
								borderRadius: 5,
								boxShadow: "0px 4px 20px 2px rgba(236, 236, 236, 0.42)",
							}}
							paddingY={1}
							paddingX={2}
						>
							<Stack direction="row" padding={2} alignItems="center">
								<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
								<Typography variant="h5" marginLeft={2}>
									Karen Law
								</Typography>
							</Stack>
						</Box>
						<Box
							sx={{
								backgroundColor: "white",
								borderRadius: 5,
								boxShadow: "0px 4px 20px 2px rgba(236, 236, 236, 0.42)",
							}}
							padding={2}
						>
							<nav aria-label="main mailbox folders">
								<List>
									<Divider light={true} />
									{navItems.map((item) => {
										return (
											<>
												<ListItem>
													<ListItemButton>
														<ListItemIcon>
															<InboxIcon />
														</ListItemIcon>
														<ListItemText
															primary={item}
															primaryTypographyProps={{
																color: "text.secondary",
															}}
														/>
													</ListItemButton>
												</ListItem>
												<Divider light={true} sx={{ color: "#F3F3F7" }} />
											</>
										);
									})}
								</List>
							</nav>
						</Box>

						<Stack>
							<Stack padding={2} direction="row" justifyContent="space-between">
								<Typography>Event</Typography>
								<Typography>View All</Typography>
							</Stack>
							<Box
								sx={{
									backgroundColor: "white",
									borderRadius: 5,
									boxShadow: "0px 4px 20px 2px rgba(236, 236, 236, 0.42)",
								}}
								padding={2}
							>
								<nav aria-label="main mailbox folders">
									<List>
										{navItems.map((item) => {
											return (
												<>
													<ListItem
														sx={{
															paddingX: 0,
															flexDirection: "column",
															alignItems: "flex-end",
														}}
													>
														<ListItemButton>
															<ListItemIcon>
																<InboxIcon />
															</ListItemIcon>
															<ListItemText
																primary={item}
																primaryTypographyProps={{
																	color: "text.secondary",
																}}
																secondary="2nd April 2022 | GatherTown"
															/>
														</ListItemButton>
														<Button
															variant="contained"
															size="small"
															sx={{ padding: 0 }}
														>
															RSVP
														</Button>
													</ListItem>
													<Divider light={true} sx={{ color: "#F3F3F7" }} />
												</>
											);
										})}
									</List>
								</nav>
							</Box>
						</Stack>
					</Stack>
				</Grid>
				<Grid item xs={6}>
					<div>xs=4</div>
				</Grid>
				<Grid item xs={3}>
					<Stack alignItems="center">
						<Typography variant="h6" marginBottom={1}>
							Meet Some New Role Model!
						</Typography>
						<Box
							sx={{
								backgroundColor: "white",
								borderRadius: 5,
								boxShadow: "0px 4px 20px 2px rgba(236, 236, 236, 0.42)",
								width: "100%",
							}}
							paddingY={1}
							paddingX={2}
						>
							<Stack padding={2} alignItems="center" spacing={2}>
								<Avatar
									alt="Remy Sharp"
									src="/static/images/avatar/1.jpg"
									sx={{ width: 150, height: 150 }}
								/>
								<Stack spacing={1} alignItems="center">
									<Typography
										variant="h5"
										marginLeft={2}
										sx={{ fontWeight: 700 }}
									>
										Emily L.
									</Typography>
									<Typography marginLeft={2}>Data Analyst</Typography>
									<Button variant="outlined">Role Model</Button>
								</Stack>
								<Typography color="text.secondary">
									<Link>Know More</Link>
								</Typography>
							</Stack>
						</Box>
					</Stack>
				</Grid>
			</Grid>
			{/* <header className="App-header">
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
		</Box>
	);
};

export default Homepage;
