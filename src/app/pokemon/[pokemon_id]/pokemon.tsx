import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image } from 'react-bootstrap';


type Props ={
   pokemon: Pokemon;
}


export default function PokemonComponent(props : Props) {
   const {pokemon} = props;


   return (
       <Container>
           <Row className="justify-content-md-center">
               <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
           </Row>
           <Row>
               <Col>
                   <Image src={pokemon.mainImage} thumbnail />
               </Col>
               <Col>
                   Pokémon Properties
               </Col>
           </Row>
       </Container>
   );
}

import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Strength
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Strength
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}