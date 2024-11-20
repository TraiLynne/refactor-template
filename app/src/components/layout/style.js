import styled from "styled-components";

export const NavContainer = styled.div`
	margin: 20px 0;
	width: 15vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const NavButton = styled.button`
	margin: 0 5px;
	padding: 10px 20px;
	cursor: pointer;
	width: 15vw;
	height: 5vw;
`;

export const DisplayToggleContainer = styled.div`
	width: 85vw;
	height: 10%;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	background-color: white;
`;

export const DisplayContainer = styled.div`
	width: 85vw;
	height: 90vh;
	display: flex;
	flex-direction: column;
	background-color: ${(props) => (props.isRefactored ? "green" : "red")};
`;

export const ComponentDisplay = styled.div`
	height: 45vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CodeDisplay = styled.div`
	height: 45vh;
`;
