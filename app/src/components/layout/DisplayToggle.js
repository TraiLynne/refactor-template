import React from "react";
import { DisplayToggleContainer, NavButton } from "./style";

const DisplayToggle = ({ isRefactored, setIsRefactored }) => (
	<DisplayToggleContainer>
		<NavButton
			className={!isRefactored ? "active" : ""}
			onClick={() => setIsRefactored(false)}
		>
			Original
		</NavButton>
		<NavButton
			className={isRefactored ? "active" : ""}
			onClick={() => setIsRefactored(true)}
		>
			Refactored
		</NavButton>
	</DisplayToggleContainer>
);

export default DisplayToggle;
