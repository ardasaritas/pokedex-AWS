import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './style.css'

type Props ={
   pokemon: Pokemon;
}


function PokemonComponent(props : Props) {
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
               <Stack gap = {2}>
                   <ProgressBar>
                   <ProgressBar variant="info" animated now={pokemon.speed} label={`${pokemon.speed}`} />
                   <ProgressBar className="progress-bar-grey" animated now = {200 - pokemon.speed} label={`Speed`} />
                   </ProgressBar>
                   <ProgressBar>
                   <ProgressBar variant="success" animated now={pokemon.healthPoints} label={`${pokemon.healthPoints}`} />
                   <ProgressBar className="progress-bar-grey" animated now = {200 - pokemon.healthPoints} label={`Health`} />
                   </ProgressBar>
                   <ProgressBar>
                   <ProgressBar variant="danger" animated now={pokemon.attack} label={`${pokemon.attack}`} />
                   <ProgressBar className="progress-bar-grey" animated now = {200 - pokemon.attack} label={`Attack`} />
                   </ProgressBar>
                   <ProgressBar>
                   <ProgressBar variant="warning" animated now={pokemon.defense} label={`${pokemon.defense}`} />
                   <ProgressBar className="progress-bar-grey" animated now = {200 - pokemon.defense} label={`Defence`} />
                   </ProgressBar>
                   <Accordion defaultActiveKey="0" className="custom-accordion">
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>Pokemon Type</Accordion.Header>
                        <Accordion.Body>
                        <Col md="auto">{pokemon.pokemonType[0]}</Col>
                        <Col md="auto">{pokemon.pokemonType[1]}</Col>
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
                  <Row>
                  <Accordion defaultActiveKey="0" className="custom-accordion">
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>Evolution Family</Accordion.Header>
                        <Accordion.Body>
                        <Col md="auto">{pokemon.evolutionFamily[0]} <Badge bg="danger">Devolution</Badge> </Col>
                        <Col md="auto">{pokemon.evolutionFamily[1]} <Badge bg="secondary">Current</Badge> </Col>
                        <Col md="auto">{pokemon.evolutionFamily[2]} <Badge bg="success">Evolution</Badge> </Col>
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
                  </Row>
               </Stack>    
               </Col>       
           </Row>
       </Container>   
   );
}

export default PokemonComponent;