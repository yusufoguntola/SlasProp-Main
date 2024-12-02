import { Box, Grid2 as Grid, TextField } from "@mui/material"; // Import Grid for layout

interface ConstructionDetailsFormProps {
	formData: {
		buildingMaterials: string[];
		architecturalStyle: string;
		condition: string;
		structuralFeatures: string[];
		buildYear: string;
	};
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handlebuildingMaterialsChange: (
		e: React.ChangeEvent<HTMLInputElement>,
	) => void;
	handlestructuralFeaturesChange: (
		e: React.ChangeEvent<HTMLInputElement>,
	) => void;
}

export default function ConstructionDetailsForm({
	formData,
	handleInputChange,
	handlebuildingMaterialsChange,
	handlestructuralFeaturesChange,
}: ConstructionDetailsFormProps) {
	// Define an array of form fields
	const fields = [
		{
			label: "Enter building materials",
			name: "buildingMaterials",
			value: formData.buildingMaterials.join(", "),
			header: "Building Materials",
			subHeader: "Enter as many as possible separated with commas.",
		},
		{
			label: "Enter structural features",
			name: "structuralFeatures",
			value: formData.structuralFeatures.join(", "),
			header: "Structural Features",
			subHeader: "Enter as many as possible separated with commas.",
		},
		{
			label: "Enter the architectural style",
			name: "architecturalStyle",
			value: formData.architecturalStyle,
			header: "Architectural Style",
		},
		{
			label: "Enter Condition",
			name: "condition",
			value: formData.condition,
			header: "Condition",
		},

		{
			label: "Enter build year",
			name: "buildYear",
			value: formData.buildYear,
			header: "Build year",
		},
	];

	return (
		<Box sx={{ justifyContent: "flex-start", mt: 2, width: "100%" }}>
			{/* Use Grid to layout form fields side by side */}
			<Grid container spacing={2}>
				{fields.map((field) => (
					<Grid size={{ xs: 6 }} key={field.label}>
						<p className="mb-1 text-[12px] text-[#000000]">{field.header}</p>
						<p className="text-[10px]">{field.subHeader}</p>
						<TextField
							label={field.label}
							size="small"
							name={field.name}
							value={field.value}
							type={field.name === "buildYear" ? "number" : "text"}
							// Conditionally apply the appropriate handler
							onChange={
								field.name === "buildingMaterials"
									? handlebuildingMaterialsChange
									: field.name === "structuralFeatures"
										? handlestructuralFeaturesChange
										: handleInputChange
							}
							fullWidth
							sx={{ my: 1 }}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
