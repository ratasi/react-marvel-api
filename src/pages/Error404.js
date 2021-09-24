import { Link } from "react-router-dom";
import { Grid, Header, Button } from "semantic-ui-react";

export default function Error404() {
  return (
    <div className="error-404">
      <Grid>
        <Grid.Column
          floated="right"
          width={10}
          className="error-404-content-text"
        >
          <div className="error-404-content-text-container">
            <Header as="h1"> Página no encontrada</Header>
            <Header as="h2"> Puedes volver a la web pulsando el botón</Header>
            <Link to="/">
              <Button color="google plus" size="massive">
                Volver a la web
              </Button>
            </Link>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
