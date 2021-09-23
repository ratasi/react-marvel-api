import { Card, Header } from "semantic-ui-react";
import useFetch from "../../hooks/useFetch";
import Container from "../Container";
import LastEvent from "../LastEvent";

import "./ListLastsEvents.scss";

export default function ListLastsEvents() {
  const lastEventsFetch = useFetch(
    `${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`
  );

  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>

      <Container>
        <Card.Group itemsPerRow={5}>
          <LastEvent lastEvents={lastEventsFetch} />
        </Card.Group>
      </Container>
    </div>
  );
}
