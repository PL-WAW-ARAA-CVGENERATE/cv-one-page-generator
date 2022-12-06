import { Container, Typography } from "@mui/material";
import FmdBadIcon from "@mui/icons-material/FmdBad";

const Disclaimer = () => {
	return (
		<Container
			id="editForm"
			sx={{ display: "flex", gap: 1, alignItems: "center" }}
		>
			<FmdBadIcon />
			<Container sx={{ display: "flex", flexDirection: "column" }}>
				<Typography variant="caption" color="inherit" fontSize={13}>
					The app is designed to just generate a{" "}
					<Typography
						variant="caption"
						color="inherit"
						fontSize={13}
						fontWeight="bold"
					>
						single page
					</Typography>{" "}
					in PDF. Please try to put a reasonable amount of text per section so
					you can have the desired layout.
				</Typography>
				<Typography
					variant="caption"
					color="inherit"
					fontSize={13}
					fontWeight="bold"
				>
					If the text exceeds the length of the preview page, it will not be
					visible in the generated PDF.
				</Typography>
			</Container>
		</Container>
	);
};

export default Disclaimer;
