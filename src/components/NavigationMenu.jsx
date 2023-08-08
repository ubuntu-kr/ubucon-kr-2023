import { useTranslations } from "../i18n/utils";
import {
	Navigation
} from "@canonical/react-components";


export default function NavigationMenu(props) {
    const t = useTranslations(props.lang);

    return(
        <Navigation
			items={[
				{
					label: `${t("navigation.about")}`,
					url: `/${props.lang}/about`
				},
				{
					items: [
						{
							label: `${t("navigation.venueSafety")}`,
							url: `/${props.lang}/venue`
						}
					],
					label: `${t("navigation.venueTravel")}`
				},
				{
					items: [
						{
							label: `${t("cfp.title")}`,
							url: `/cfp`
						},
						{
							label: `${t("navigation.sessions")}`,
							url: `https://events.canonical.com/event/32/contributions`	
						},
						{
							label: `${t("navigation.timetable")}`,
							url: `https://events.canonical.com/event/32/timetable/`
						},
						{
							label: `${t("navigation.ksp")}`,
							url: `https://github.com/ubuntu-kr/ksp-toolkits/blob/master/ksp/ksp-20230909/readme.md`
						}
					],
					label: `${t("navigation.program")}`
				},
				{
					items: [
						{
							label: `${t("navigation.becomeSponsor")}`,
							url: `/${props.lang}/sponsor`
						},
						{
							label: `${t("navigation.patrons")}`,
							url: `/${props.lang}/patrons`
						}
					],
					label: `${t("navigation.sponsor")}`
				}
			]}
			itemsRight={[
				{
					label: "🎫",
					url: `/tickets`
				},
				{
					label: "ubuntu-kr.org",
					url: "https://ubuntu-kr.org",
				}
			]}
			logo={{
				src: "/UbuntuKrCircleWhite.svg",
				title: "UbuCon Korea 2023",
				url: `/${props.lang}`,
			}}
			theme="dark"
		/>
    )
}