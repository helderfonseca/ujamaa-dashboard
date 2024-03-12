import { Card, Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import classes from './styles/App.module.scss'
import { fetchCategoriesNCandidates } from './utils/http'
import { BarChart } from './components/BarChart'
import { useLayoutEffect, useState } from 'react'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function App() {
  const [content, setContent] = useState([]);

  useLayoutEffect(() => {
    async function getData(){
      const fetchedData = await fetchCategoriesNCandidates();
      setContent(fetchedData);
      //console.log(fetchedData);
    }
    getData();

    return () => {
      setContent(() => []);
    }
  }, [])

  // Candidates Label
  const labelsArray = content.map(content => content.candidates.map(candidate => candidate.projectName));
  const labels = labelsArray.reduce((elem1, elem2) => elem1.concat(elem2), []);

  // Candidates vote count
  const voteCountArray = content.map(content => content.candidates.map(candidate => candidate.voteAmount));
  const voteData = voteCountArray.reduce((elem1, elem2) => elem1.concat(elem2), []);
  //console.log(voteData);

  const dataChart = {
        labels,
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: 'Número de votos',
                data: voteData,
                // you can set indiviual colors for each bar
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 99, 132)',
                  'rgb(255, 99, 132)',
                  'rgb(255, 99, 132)',
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(255, 205, 86)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(153, 102, 255)'
                ],
                borderWidth: 1,
            }
        ]
  }
  
  //set background-color for cards
  const backgroundColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
  ];

  return (
    <Container className={classes.content}>
      <h2>Conteúdo</h2>
      <Row xs={1} md={3} className="g-4 justify-content-center">  
        {
          content && content.map((category, index )=> (
            <Col key={category.name} className='d-flex justify-content-between align-items-stretch'>
              <Card style={{ width: '100%', background: backgroundColors[index]}}>
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
        <Row xs={1} md={2} className='justify-content-center'>
                <Col>
                    <BarChart chartData={dataChart} />
                </Col>
            </Row>
    </Container>
  )
}

export default App
