import { useOutletContext } from "react-router-dom";

export default function Settings() {
	const [theme, setTheme]: [number, any] = useOutletContext();
	return (
		<div className="pages settingsPage">
			<header>
				<h1 className="title">Settings</h1>
			</header>

			<div className="settingsGrid">
				<div className="themeSwitcher">
					<label className="themeSwitchBtn" htmlFor="theme_switch">
						<svg
							className="btnImg"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_2_17382)">
								<path
									d="M15.3595 13.0859C14.0379 13.0859 12.8448 12.8873 11.7804 12.4902C10.7159 12.0931 9.80449 11.5202 9.04603 10.7715C8.28756 10.0228 7.7065 9.11947 7.30286 8.06152C6.89921 7.00358 6.69739 5.81055 6.69739 4.48242C6.69739 4.11784 6.72506 3.71908 6.7804 3.28613C6.83573 2.85319 6.90898 2.4349 7.00013 2.03125C7.09127 1.6276 7.19544 1.28906 7.31263 1.01562C7.3582 0.904946 7.3875 0.812174 7.40052 0.737305C7.41354 0.662435 7.42005 0.602214 7.42005 0.556641C7.42005 0.426432 7.37122 0.301107 7.27356 0.180664C7.1759 0.0602213 7.03268 0 6.84388 0C6.79179 0 6.71366 0.00813803 6.6095 0.0244141C6.50533 0.0406901 6.39791 0.0683594 6.28724 0.107422C5.08281 0.589193 4.02812 1.31022 3.12317 2.27051C2.21822 3.2308 1.51347 4.33919 1.00891 5.5957C0.504354 6.85221 0.252075 8.16406 0.252075 9.53125C0.252075 10.9701 0.507609 12.2884 1.01868 13.4863C1.52974 14.6842 2.24263 15.7243 3.15735 16.6064C4.07206 17.4886 5.14302 18.1706 6.37023 18.6523C7.59745 19.1341 8.92396 19.375 10.3498 19.375C11.4044 19.375 12.4103 19.2269 13.3673 18.9307C14.3243 18.6344 15.2033 18.2243 16.0041 17.7002C16.8048 17.1761 17.4981 16.5674 18.0841 15.874C18.67 15.1807 19.1127 14.4369 19.4123 13.6426C19.4578 13.5254 19.4871 13.4163 19.5001 13.3154C19.5131 13.2145 19.5197 13.1413 19.5197 13.0957C19.5197 12.9134 19.4578 12.7669 19.3341 12.6562C19.2104 12.5455 19.0802 12.4902 18.9435 12.4902C18.8328 12.4902 18.6928 12.5195 18.5236 12.5781C18.146 12.7018 17.674 12.8174 17.1076 12.9248C16.5412 13.0322 15.9585 13.0859 15.3595 13.0859Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2_17382">
									<rect
										width="19.2676"
										height="19.3848"
										fill="white"
										transform="translate(0.252075)"
									/>
								</clipPath>
							</defs>
						</svg>
						<p className="btnLabel">Dark Mode</p>
					</label>
					<input
						type="checkbox"
						name="theme_switch"
						id="theme_switch"
						className="themeSwitch"
						onClick={() => {
							document.documentElement.setAttribute(
								"data-theme",
								theme ? "dark" : "light"
							);
							theme ? setTheme(0) : setTheme(1);
							const manifests = document.querySelectorAll(
								'meta[name="theme-color"]'
							);
							manifests.forEach((link) => {
								// @ts-ignore
								link.content = theme ? "#000" : "#fff";
							});
						}}
					/>
				</div>
			</div>
		</div>
	);
}
