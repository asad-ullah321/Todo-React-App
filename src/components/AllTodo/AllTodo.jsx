import React from 'react'
import { Container } from 'react-bootstrap'
import { Cards } from '../Cards/Cards'
import { useSelector } from 'react-redux'
import "./AllTodo.css"
import Accordion from 'react-bootstrap/Accordion';

export const AllTodo = () => {
    const objects = useSelector(state=>state.alltodo);
  return (
    <Container className="all">
        <Accordion defaultActiveKey="0">
            {objects.map((m)=>(<Cards head={m.title} dis={m.dec} obj={m}></Cards>))}
        </Accordion>
    </Container>
  )
}
