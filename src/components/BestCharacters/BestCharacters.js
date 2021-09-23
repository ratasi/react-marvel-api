import { Header, Button, Grid, Image } from "semantic-ui-react";
import Container from "../Container";
import "./BestCharacters.scss";
import marvelImage from "../../img/marvel.png";

export default function BestCharacters() {
  return (
    <Container>
      <div className="best-characters">
        <Grid columns={2} divided="vertically">
          <Grid.Column>
            <Header as="h1">
              Los mejores personajes de Marvel de los que todo el mundo habla
            </Header>
            <Header as="h3">Disfruta del mejor contenido.</Header>
            <Button>Ver todos los personajes</Button>
          </Grid.Column>
          <Grid.Column className="image-container">
            <Image src={marvelImage} />
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
}
