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
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import Logo from "../../Assets/logo.png";
import UserAvatar from "../../Assets/avatar.png";
import UserAvatar2 from "../../Assets/UserAvatar2.png";
import UserAvatar3 from "../../Assets/UserAvatar3.png";
import UserAvatar4 from "../../Assets/UserAvatar4.png";
import RoleModelAvatar from "../../Assets/roleModel.png";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

import "./style.scss";

const Homepage = () => {
	const defaultComments = [
		{
			avatar: UserAvatar3,
			name: "Joyce N.",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nibh nunc vitae libero, enim felis nunc, odio et. Praesent imperdiet leo pretium bibendum diam id id volutpat feugiat.",
		},
		{
			avatar: UserAvatar4,
			name: "Anna A.",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			avatar: UserAvatar3,
			name: "Joyce N.",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nibh nunc vitae libero, enim felis nunc, odio et. Praesent imperdiet leo pretium bibendum diam id id volutpat feugiat.",
		},
	];
	const [cm, setCM] = React.useState("");
	const [comments, setComments] = React.useState(defaultComments);
	const [recArt, setRecArt] = React.useState({ title: "", url: "" });

	const navItems = [
		{ icon: <HomeOutlinedIcon />, text: "Homepage" },
		{ icon: <ArticleOutlinedIcon />, text: "Article" },
		{ icon: <ForumOutlinedIcon />, text: "Discussion" },
		{ icon: <GroupsOutlinedIcon />, text: "Group" },
		{ icon: <LocalActivityOutlinedIcon />, text: "Event" },
		{ icon: <PersonAddAltOutlinedIcon />, text: "Following" },
	];

	const events = [
		{
			icon: <GroupsOutlinedIcon />,
			title: "GatherTown Networking",
			date: "2nd April 2022",
			location: "GatherTown",
		},
		{
			icon: <SportsEsportsOutlinedIcon />,
			title: "IT Industry Sharing",
			date: "4th April 2022",
			location: "Zoom",
		},
		{
			icon: <CoPresentOutlinedIcon />,
			title: "Keynote by Rainny L.",
			date: "7th April 2022",
			location: "Google Meet",
		},
		{
			icon: <AutoGraphOutlinedIcon />,
			title: "Marketing Masterclass",
			date: "8th April 2022",
			location: "Raffles Place",
		},
	];

	const onCommentPost = () => {
		let newComments = [...comments];
		newComments.push({
			avatar: UserAvatar,
			name: "Karen Law",
			content: cm,
		});
		setComments(newComments);
		setCM("");
	};

	const getRecommendedArticle = async () => {
		const result = await axios.get("http://localhost:8000");
		setRecArt(result.data);
		console.log(result);
		// return result;
	};

	useEffect(() => {
		getRecommendedArticle();
	}, []);

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
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						paddingLeft: "72px",
						paddingRight: "72px",
						paddingTop: "20px",
						paddingBottom: "20px",
					}}
				>
					<img src={Logo} style={{ maxHeight: 30 }} />
					<Typography
						variant="h5"
						fontWeight={800}
						color="primary"
						sx={{ left: "48%", position: "absolute" }}
					>
						INSPIRE
					</Typography>
					<Stack direction="row" alignItems="center" spacing={2.5}>
						<Button variant="contained" sx={{ backgroundColor: "#0B5286" }}>
							<AddIcon fontSize="small" />
							Post
						</Button>
						<TextField
							id="outlined-search"
							label="Search"
							type="search"
							size="small"
						/>
						<Avatar alt="user" src={UserAvatar} />
					</Stack>
				</div>
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
								<Avatar alt="user" src={UserAvatar} />
								<Typography marginLeft={2} className={"Homepage__userName"}>
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
														{item.text === "Homepage" ? (
															<div
																style={{
																	display: "flex",
																	alignItems: "center",
																}}
															>
																<ListItemIcon sx={{ color: "#0B5286" }}>
																	{item.icon}
																</ListItemIcon>
																<ListItemText
																	primary={item.text}
																	primaryTypographyProps={{
																		color: "#0B5286",
																		fontWeight: "700",
																	}}
																/>{" "}
															</div>
														) : (
															<div
																style={{
																	display: "flex",
																	alignItems: "center",
																}}
															>
																<ListItemIcon>{item.icon}</ListItemIcon>
																<ListItemText
																	primary={item.text}
																	primaryTypographyProps={{
																		color: "text.secondary",
																	}}
																/>
															</div>
														)}
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
							<Stack
								padding={2}
								direction="row"
								justifyContent="space-between"
								alignItems="baseline"
							>
								<Typography
									sx={{ color: "#FF8515", fontWeight: "700", fontSize: "16px" }}
								>
									Event
								</Typography>
								<Typography sx={{ color: "#6D6D6D", fontSize: "11px" }}>
									View All
								</Typography>
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
										{events.map((event) => {
											return (
												<>
													<ListItem
														sx={{
															paddingX: 0,
															flexDirection: "column",
															alignItems: "flex-start",
														}}
													>
														<ListItemButton>
															<ListItemIcon sx={{ color: "#FF8515" }}>
																{event.icon}
															</ListItemIcon>
															<ListItemText
																primary={event.title}
																primaryTypographyProps={{
																	color: "#0B5286",
																	fontSize: "13px",
																	fontWeight: 500,
																}}
																secondary={event.date + " | " + event.location}
																secondaryTypographyProps={{ fontSize: "10px" }}
															/>
														</ListItemButton>
														<Button
															variant="contained"
															size="small"
															className="Homepage__eventRSVPButton"
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
					<div>
						<Accordion
							sx={{
								boxShadow: "0px 4px 20px 2px #ECECEC6B",
								borderRadius: "10px !important",
								padding: "10px",
							}}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<div className="Homepage__accordionSummary">
									<Avatar
										alt="user"
										src={UserAvatar2}
										sx={{ width: 40, height: 40 }}
									/>
									<Typography
										sx={{
											marginLeft: "20px",
											fontWeight: 600,
											color: "#0B5286",
										}}
									>
										What do you think about the recent COVID-19 policy?
									</Typography>
								</div>
							</AccordionSummary>
							<AccordionDetails>
								<Box
									sx={{
										backgroundColor: "#EFF6FC",
										padding: 5,
										maxHeight: "400px",
										overflowY: "scroll",
									}}
								>
									<Stack spacing={3}>
										{comments.map((cm, i) => {
											return (
												<Box
													sx={{
														backgroundColor: "white",
														padding: 3,
														borderRadius: 2,
													}}
												>
													<Stack direction="row" spacing={2}>
														<Avatar
															alt="user"
															src={cm.avatar}
															sx={{ width: 40, height: 40 }}
														/>
														<Stack spacing={1}>
															<Typography
																sx={{
																	fontSize: "16px",
																	color: "#0B5286",
																	fontWeight: 700,
																}}
															>
																{cm.name}
															</Typography>

															<Typography sx={{ fontSize: "14px" }}>
																{cm.content}
															</Typography>
														</Stack>
													</Stack>
												</Box>
											);
										})}
									</Stack>
								</Box>
								<Box
									sx={{
										backgroundColor: "white",
										padding: "20px",
										boxShadow: "0px -30px 20px -20px #0000000D",
									}}
								>
									<Stack spacing={2}>
										<Stack
											direction="row"
											justifyContent={"space-between"}
											alignItems="center"
										>
											<Typography sx={{ fontWeight: 600, color: "#0B5286" }}>
												Leave a Comment
											</Typography>
											<Button
												variant="text"
												sx={{ color: "#0B5286" }}
												onClick={() => onCommentPost()}
											>
												Post
											</Button>
										</Stack>
										<TextField
											id="outlined-multiline-static"
											multiline
											rows={3}
											value={cm}
											onChange={(e) => setCM(e.target.value)}
										/>
									</Stack>
								</Box>
							</AccordionDetails>
						</Accordion>
						<div>
							<Typography>Recommended Article</Typography>
							<Typography>{recArt ? recArt.title : ""}</Typography>
							<a href={recArt.url}>Link to the article</a>
						</div>
					</div>
				</Grid>
				<Grid item xs={3}>
					<Stack alignItems="center">
						<Typography
							marginBottom={1}
							sx={{ fontSize: "16px", color: "#AB70E7", fontWeight: 700 }}
						>
							Meet Some New Role Model!
						</Typography>
						<Box
							sx={{
								backgroundColor: "white",
								borderRadius: 5,
								boxShadow: "0px 4px 20px 2px rgba(236, 236, 236, 0.42)",
								width: "100%",

								border: "2px solid #DFBEFF ",
							}}
							paddingY={1}
							paddingX={2}
						>
							<Stack padding={2} alignItems="center" spacing={2}>
								<Avatar
									alt="user"
									src={RoleModelAvatar}
									sx={{ width: 150, height: 150 }}
								/>
								<Stack spacing={0.8} alignItems="center">
									<Typography
										variant="h5"
										sx={{ fontWeight: 700, color: "#0B5286" }}
									>
										Emily L.
									</Typography>
									<Typography sx={{ color: "#303030" }}>
										Data Analyst
									</Typography>
									<Button
										variant="outlined"
										size="small"
										sx={{
											color: "#AB70E7",
											borderColor: "#AB70E7",
											borderRadius: 3,
										}}
									>
										<Typography
											sx={{ padding: 0.5, fontWeight: 500, fontSize: "13px" }}
										>
											Role Model
										</Typography>
									</Button>
								</Stack>
								<Typography
									sx={{
										marginTop: "54px !important",
										color: "#808080",
										cursor: "pointer",
										textDecoration: "underline",
										fontSize: "13px",
									}}
								>
									Know More
								</Typography>
							</Stack>
						</Box>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Homepage;
