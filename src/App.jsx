import { Card, Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import classes from './styles/App.module.scss'
import { fetchCategoriesNCandidates } from './utils/http'

import './styles/App.module.scss'
import { useEffect, useState } from 'react'

function App() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function getData(){
      const fetchedData = await fetchCategoriesNCandidates();
      setContent(fetchedData);
      console.log(fetchedData);
    }
    getData();
  }, [])


  return (
    <Container className={classes.content}>
              <h2>Conteúdo</h2>
              <Row xs={1} md={3} className="g-4 justify-content-center">  
              {/*<Row xs={1} md={3} className="g-4 justify-content-center">  
              <Col className='d-flex justify-content-between align-items-stretch'>
                  <Card style={{ width: '100%'}}>
                  <Card.Body>
                      <Card.Title style={{ fontWeight: 700 }}>Alimentação</Card.Title>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Card.Text style={{ fontSize: '13px' }}>Pastilim de dona Graça</Card.Text>
                          <Card.Text style={{ fontWeight: 700 }}>123</Card.Text>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Card.Text style={{ fontSize: '13px' }}>Bodji Sab Sab</Card.Text>
                          <Card.Text style={{ fontWeight: 700 }}>520</Card.Text>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Card.Text style={{ fontSize: '13px' }}>Gigalanche</Card.Text>
                          <Card.Text style={{ fontWeight: 700 }}>320</Card.Text>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Card.Text style={{ fontSize: '13px' }}>Pinga Djond`Elena</Card.Text>
                          <Card.Text style={{ fontWeight: 700 }}>320</Card.Text>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Card.Text style={{ fontSize: '13px' }}>Atleta Kriol Lanchonete</Card.Text>
                          <Card.Text style={{ fontWeight: 700 }}>320</Card.Text>
                      </div>
                  </Card.Body>
                  </Card>
              </Col>
              <Col className='d-flex justify-content-between align-items-stretch'>
                  <Card style={{ width: '100%'}}>
                      <Card.Body>
                          <Card.Title style={{ fontWeight: 700 }}>Arte</Card.Title>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Card.Text style={{ fontSize: '13px' }}>Nharti Artesanato e Decoração</Card.Text>
                              <Card.Text style={{ fontWeight: 700 }}>123</Card.Text>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Card.Text style={{ fontSize: '13px' }}>Sonia Artes</Card.Text>
                              <Card.Text style={{ fontWeight: 700 }}>520</Card.Text>
                          </div>
                      </Card.Body>
                  </Card>
              </Col>
              <Col className='d-flex justify-content-between align-items-stretch'>
                  <Card style={{ width: '100%'}}>
                      <Card.Body>
                          <Card.Title style={{ fontWeight: 700 }}>Estética/Beleza</Card.Title>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Card.Text style={{ fontSize: '13px' }}>Kuale Miniz</Card.Text>
                              <Card.Text style={{ fontWeight: 700, background: 'brown', borderRadius: '50%', padding: '5px', color: '#fff' }}>523</Card.Text>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Card.Text style={{ fontSize: '13px' }}>By Linda Rocha Beauty</Card.Text>
                              <Card.Text style={{ fontWeight: 700, background: 'brown', borderRadius: '50%', padding: '5px', color: '#fff' }}>520</Card.Text>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Card.Text style={{ fontSize: '13px' }}>Bell Make Up</Card.Text>
                              <Card.Text style={{ fontWeight: 700, background: 'brown', borderRadius: '50%', padding: '5px', color: '#fff' }}>320</Card.Text>
                          </div>
                      </Card.Body>
                  </Card>
              </Col>
              <Col className='d-flex justify-content-between align-items-stretch'>
                  <Card style={{ width: '100%'}}>
                      <Card.Body>
                          <Card.Title style={{ fontWeight: 700 }}>Investimento</Card.Title>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Card.Text style={{ fontSize: '13px' }}>Chave Group Socidade Unipossol</Card.Text>
                              <Card.Text style={{ fontWeight: 700 }}>123</Card.Text>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Card.Text style={{ fontSize: '13px' }}>Bodjy Sab Sab</Card.Text>
                              <Card.Text style={{ fontWeight: 700 }}>520</Card.Text>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Card.Text style={{ fontSize: '13px' }}>Bodjy Sab Sab</Card.Text>
                              <Card.Text style={{ fontWeight: 700 }}>320</Card.Text>
                          </div>
                      </Card.Body>
                  </Card>
              </Col>
              <Col className='d-flex justify-content-between align-items-stretch'>
                  <Card style={{ width: '100%'}}>
                      <Card.Body>
                          <Card.Title style={{ fontWeight: 700 }}>Saúde</Card.Title>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Card.Text style={{ fontSize: '13px' }}>Basefightclub</Card.Text>
                              <Card.Text style={{ fontWeight: 700 }}>123</Card.Text>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Card.Text style={{ fontSize: '13px' }}>Lidie Clínica Dentária sociedade unipessoal lda</Card.Text>
                              <Card.Text style={{ fontWeight: 700 }}>520</Card.Text>
                          </div>
                      </Card.Body>
                  </Card>
              </Col>
              <Col className='d-flex justify-content-between align-items-stretch'>
                  <Card style={{ width: '100%'}}>
                      <Card.Body>
                          <Card.Title style={{ fontWeight: 700 }}>Serviço</Card.Title>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Card.Text style={{ fontSize: '13px' }}>Telma Pires Serviços Comerciais</Card.Text>
                              <Card.Text style={{ fontWeight: 700 }}>123</Card.Text>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Card.Text style={{ fontSize: '13px' }}>ED - Comercio & Prestação de Serviço, Lda</Card.Text>
                              <Card.Text style={{ fontWeight: 700 }}>520</Card.Text>
                          </div>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
          <Row xs={1} md={2} className='justify-content-center'>
  </Row>*/}
        {
          content && content.map(category => (
            <Col key={category.name} className='d-flex justify-content-between align-items-stretch'>
              <Card style={{ width: '100%'}}>
              <Card.Body>
                  <Card.Title style={{ fontWeight: 700 }}>{category.name}</Card.Title>
                  {
                    category.candidates.map(candidate => (
                        <div key={candidate.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Card.Text style={{ fontSize: '13px' }}>{candidate.projectName}</Card.Text>
                            <Card.Text style={{ fontWeight: 700 }}>{candidate.voteAmount}</Card.Text>
                        </div>
                    ))
                  }
              </Card.Body>
              </Card>
            </Col>
          ))
        }
        </Row>
    </Container>
  )
}

export default App
