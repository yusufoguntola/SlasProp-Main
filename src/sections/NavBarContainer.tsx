"use client";

import { Container } from "@mui/material";

import { MainBar } from "@/components/MainBar";
import { NavigationBar } from "@/components/NavigationBar";

export function NavBarContainer() {
	return (
		<Container>
			<MainBar />
			<NavigationBar />
		</Container>
	);
}
