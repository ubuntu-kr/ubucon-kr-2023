import { Strip, Row, Col, Button } from "@canonical/react-components";
import { useState, useEffect } from "react";
import { useTranslations } from "../i18n/utils";

export default function DiscourseNoticeBanner(props) {
    const [ topicList, setTopicList ] = useState([]);
    const t = useTranslations(props.lang);
    useEffect(() => {
        fetch(`${props.baseUrl}${props.topicBoardEndpoint}${props.topicTag}.json?order=created`)
            .then(res => res.json()).then(data => {
                console.log("data fetched")
                const topics = data["topic_list"]["topics"];
                const mappedTopics = topics
                    .map(item => {
                        return {
                            title: item["title"],
                            date: new Date(item["last_posted_at"]).toLocaleString(),
                            url: `${props.baseUrl}/t/${item["slug"]}/${item["id"]}`,
                        };
                    }).slice(0, 3);
                setTopicList(mappedTopics);
            })
    }, [])
    return (
        <Strip>
            <Row>
                {topicList && topicList.map(item => (
                    <Col size={4}>
                        <a href={item.url}>
                            <h3>{item.title}</h3>
                        </a>
                        <b>{item.date}</b>
                    </Col>
                ))}
            </Row>
            <Row style={{marginTop: "1em"}}>
                <Col size={12} className="u-align-text--right">
                    <Button
                        appearance=""
                        element="a"
                        href={`${props.baseUrl}${props.topicBoardEndpoint}${props.topicTag}`}
                    >
                        {t("discourseNoticeBanner.moreTopics")}
                    </Button>
                </Col>
            </Row>
        </Strip>
    )
}

