import Container from "@mui/material/Container";
import { FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import AvatarEdit from "./Avatar";
import Editor from "./Editor";
import Disclaimer from "./Disclaimer";

const UserForm = ({ updateText, state, includeField, setAvatar }: any) => {
	return (
		<Container maxWidth="xl" sx={{ mb: 4, mt: 4 }}>
			<Disclaimer />
			<Grid
				container
				spacing={1}
				sx={{
					mb: 2,
					mt: 2,
				}}
				gap={2}
			>
				<Grid container spacing={2} gap={2} justifyContent="center">
					<Grid container md={4} item height="fit-content">
						<AvatarEdit getAvatar={setAvatar} />
					</Grid>
					<Grid container md={7} item alignItems="center">
						<Grid item xs={12} sx={{ mb: 0, mt: 0 }}>
							{state.personalDetails.map(
								(
									el: {
										id: number;
										shouldInclude: boolean;
										content: string;
										fieldName: string;
									},
									i: string
								) => (
									<TextField
										fullWidth
										margin="normal"
										value={el.content}
										key={el.id}
										label={el.fieldName}
										variant="outlined"
										onChange={(e) =>
											updateText(e.target.value, el.id, "personalDetails")
										}
										inputProps={{ maxLength: 20 }}
									/>
								)
							)}
						</Grid>
					</Grid>
					<Grid
						container
						className="include"
						gap={2}
						xs={12}
						item
						justifyContent="space-between"
					>
						{state.skills.map(
							(
								el: {
									id: number;
									shouldInclude: boolean;
									content: string;
									fieldName: string;
								},
								i: number
							) => (
								<Grid
									item
									xs={12}
									sm={5}
									key={i}
									borderBottom={1}
									borderColor="#E0E0E0"
									paddingBottom={3}
								>
									<Typography
										color="rgb(5, 150, 255)"
										variant="h5"
										fontWeight={500}
									>
										{el.fieldName}
									</Typography>
									<FormControlLabel
										control={
											<Switch
												onChange={(e) =>
													includeField(e.currentTarget, el.id, "skills")
												}
												checked={el.shouldInclude}
											/>
										}
										label="Include in PDF"
									/>
									<Editor
										onWriting={(text: string) =>
											updateText(text, el.id, "skills")
										}
									/>
								</Grid>
							)
						)}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default UserForm;
