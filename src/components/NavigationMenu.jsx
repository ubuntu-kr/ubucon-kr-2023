import { useTranslations } from "../i18n/utils";
import {
	Navigation
} from "@canonical/react-components";


export default function NavigationMenu(props) {
    const t = useTranslations(props.lang);

    return(
        <Navigation
			items={[
			]}
			itemsRight={[
				{
					label: "ubuntu-kr.org",
					url: "https://ubuntu-kr.org",
				}
			]}
			logo={{
				src: "/UbuntuKrCircleWhite.svg",
				title: "UbuCon Korea 2023",
				url: "/",
			}}
			theme="dark"
		/>
    )
}