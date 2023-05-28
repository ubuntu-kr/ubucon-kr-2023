
import { Strip, Row, Col } from "@canonical/react-components";
import { useState, useEffect } from "react";

export default function DiscourseNoticeBanner(props) {
    const { topicList, setTopicList } = useState([]);
    useEffect(() => {
        fetch(`${props.baseUrl}${props.jsonFeedEndpoint}`)
            .then(res => res.json()).then(data => {
                console.log("data fetched")
                let topics = data["topic_list"]["topics"];
                let filteredTopics = topics
                    .filter(item => item["tags"].contains(props.topicTag))
                    .map(item => {
                        return {
                            title: item["title"],
                            date: item["last_posted_at"],
                            url: `${props.baseUrl}/t/${item["slug"]}/${item["id"]}`,
                        };
                    });
                setTopicList(filteredTopics);
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
        </Strip>
    )
}

