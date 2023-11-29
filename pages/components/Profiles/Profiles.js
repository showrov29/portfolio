import { SOCIAL_LINKS } from "@/constants";
import { Icon } from "@iconify/react";
import styles from "./Profiles.module.scss";

const Profiles = () => {
	return (
		<div className={`${styles.profile}`}>
			{SOCIAL_LINKS &&
				SOCIAL_LINKS.map(({ name, url, icon }) => {
					return (
						<div className="hover:transition-all hover:scale-125 duration-300">
							<a
								href={url}
								key={name}
								className="link"
								rel="noreferrer"
								target="_blank"
								aria-label={name}>
								<Icon
									icon={icon}
									width={40}
									color={`${name === "mail" && "#33D4FF"}`}
									height={40}
								/>
								{/* <Icon icon={"mdi-light:home"} width={40} height={40} /> */}
							</a>
						</div>
						// <h1>{name}</h1>
						// <a
						// 	href={url}
						// 	key={name}
						// 	className="link"
						// 	rel="noreferrer"
						// 	target="_blank"
						// 	aria-label={name}>
						// 	<Icon name={name} />
						// </a>
					);
				})}
		</div>
	);
};

export default Profiles;
