import Accordion from 'react-bootstrap/Accordion';
import "../pages/ServiciiParteneri.css"

function AccordionFirstOpen() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Sablare</Accordion.Header>
        <Accordion.Body>
        Oferim servicii de sablare profesionale pentru pregătirea suprafețelor metalice în vederea vopsirii sau acoperirii cu protecție anticorozivă. Utilizăm tehnici avansate pentru a asigura o pregătire optimă a suprafețelor.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Vopsire Decorativă</Accordion.Header>
        <Accordion.Body>
        Echipa noastră de specialiști în vopsire efectuează aplicarea de finisaje decorative de înaltă calitate pentru a vă ajuta să obțineți aspectul dorit pentru proiectul dvs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Protecție Anticorozivă</Accordion.Header>
        <Accordion.Body>
        Fie că este vorba despre acoperiri cu zincare sau alte metode de protecție anticorozivă, ne asigurăm că piesele și structurile metalice sunt protejate împotriva deteriorării și coroziunii pe termen lung.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Confectii Metalice</Accordion.Header>
        <Accordion.Body>
        Realizăm confecții metalice personalizate, adaptate cerințelor și specificațiilor dvs., utilizând tehnologii moderne și materiale de cea mai înaltă calitate.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Montaj și Mentenanță Echipamente Hidromecanice</Accordion.Header>
        <Accordion.Body>
        Oferim servicii complete de montaj și mentenanță pentru echipamente hidromecanice, asigurându-ne că acestea funcționează în mod optim și în siguranță.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Goliri de Fund Baraje</Accordion.Header>
        <Accordion.Body>
        Echipa noastră de specialiști este pregătită să efectueze goliri de fund pentru baraje, folosind tehnici și echipamente de ultimă generație pentru a asigura eficiență și siguranță în fiecare etapă a procesului.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Sondaje și Relevee</Accordion.Header>
        <Accordion.Body>
        Oferim servicii de sondaje și relevee pentru a evalua și documenta condiția infrastructurii hidromecanice și a altor structuri, contribuind astfel la planificarea și implementarea proiectelor viitoare.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionFirstOpen;