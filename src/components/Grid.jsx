import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import useWindowDimension from "../utility/windowHook";
import "../pages/Home.css";

function GridCards() {
  const { width } = useWindowDimension();

  let GridContainer = "d-flex";
  if (width < "768") {
    GridContainer += " flex-column";
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <Row className={GridContainer}>
        <Col className="my-4 ">
          <Card className="Card" border="dark" style={{ height: "100%" }}>
            <Card.Header className="card-title">
              1. Experiență și Competență
            </Card.Header>
            <Card.Body>
              <Card.Text className="card-text">
                Cu o istorie solidă în domeniu, ne-am câștigat reputația prin
                abordarea noastră profesională și experiența vastă în industria
                de protecție anticorozivă și hidroenergetică.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="my-4">
          <Card className="Card" border="dark" style={{ height: "100%" }}>
            <Card.Header className="card-title">
              2. Soluții Avansate de Protecție Anticorozivă
            </Card.Header>
            <Card.Body>
              <Card.Text className="card-text">
                Ne angajăm să protejăm infrastructura critică împotriva
                deteriorării cauzate de coroziune. Oferim o gamă largă de
                soluții, inclusiv vopsire anticorozivă, acoperiri speciale și
                tehnologii avansate de protecție.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className={GridContainer}>
        <Col className="mb-4">
          <Card className="Card" border="dark" style={{ height: "100%" }}>
            <Card.Header className="card-title">
              3. Servicii de Mentenanță pentru Echipamente Hidroenergetice
            </Card.Header>
            <Card.Body>
              <Card.Text className="card-text">
                Înțelegem importanța funcționării eficiente a echipamentelor
                hidroenergetice. Echipa noastră de experți oferă servicii de
                mentenanță preventivă și corectivă pentru a asigura performanța
                optimă a echipamentelor dumneavoastră.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="Card" border="dark" style={{ height: "100%" }}>
            <Card.Header className="card-title">
              4. Inovație și Tehnologie
            </Card.Header>
            <Card.Body>
              <Card.Text className="card-text">
                Suntem mereu la curent cu cele mai recente tehnologii și
                inovații în domeniul protecției anticorozive și hidroenergetice,
                pentru a oferi soluții de vârf care să răspundă cerințelor în
                continuă schimbare ale industriei.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className={GridContainer}>
        <Col className="mb-4">
          <Card className="Card" border="dark" style={{ height: "100%" }}>
            <Card.Header className="card-title">
              5. Angajamentul față de Calitate și Siguranță
            </Card.Header>
            <Card.Body>
              <Card.Text className="card-text">
                Calitatea și siguranța sunt fundamentale pentru noi. Ne angajăm
                să respectăm cele mai ridicate standarde de calitate și
                siguranță în toate aspectele activității noastre.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card className="Card" border="dark" style={{ height: "100%" }}>
            <Card.Header className="card-title">
              6. Parteneriate și Colaborare
            </Card.Header>
            <Card.Body>
              <Card.Text className="card-text">
                Ne considerăm parteneri ai clienților noștri, lucrând împreună
                pentru a identifica cele mai bune soluții și pentru a asigura
                succesul proiectelor lor.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GridCards;
