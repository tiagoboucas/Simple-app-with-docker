import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import { observer } from "mobx-react";
import colorStore from "../stores/ColorStore";

const Layout = observer(() => {
	return (
		<>
			<div
				className='App'
				style={{ backgroundColor: colorStore.backgroundColor }}
			>
				<Header text='Theme picker' />
				<div className='container'>
					<Navigation />
					<Outlet />
				</div>
			</div>
		</>
	);
});

export default Layout;
