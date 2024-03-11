import { Bar } from "react-chartjs-2";
import PropTypes from 'prop-types';

export const BarChart = ({ chartData }) => {

    return (
      <div className="chart-container">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Bar Chart Prémio Nacional"
              },
              legend: {
                //position: 'top' as const,
                display: false
              }}
          }}
        />
      </div>
    );
}

BarChart.propTypes = {
  chartData: PropTypes.object
}
