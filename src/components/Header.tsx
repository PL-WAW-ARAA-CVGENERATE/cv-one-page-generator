import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => (
	<AppBar
		color="default"
		elevation={0}
		sx={{
			position: "fixed",
			borderBottom: (t) => `1px solid ${t.palette.divider}`,
		}}
	>
		<Toolbar>
			<Typography variant="h6" color="inherit" noWrap>
				Atos One Pager Generator (2.1v)
			</Typography>
		</Toolbar>
		<Button
			variant="outlined"
			href="#editForm"
			sx={{
				top: "12px",
				display: { xs: "none", sm: "inline-block" },
				position: "fixed",
				right: "145px",
				textAlign: "center",
				width: "100px",
			}}
		>
			Edit
		</Button>
		<Button
			variant="contained"
			href="#OnePagerResult"
			sx={{
				top: "12px",
				display: { xs: "none", sm: "inline-block" },
				position: "fixed",
				right: "30px",
				textAlign: "center",
				width: "100px",
			}}
		>
			Preview
		</Button>
	</AppBar>
);

export default Header;
