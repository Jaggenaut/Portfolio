import React, { Component } from 'react'
import "./Styles/Skills.css"
import ReactApexChart from 'react-apexcharts'
import Python from '../Assets/Python.png'

export class Skills extends Component {
  render() {

    let state = {
          
      series: [90],
      options: {
        chart: {
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '70%',
              image: Python,
              imageWidth: 90,
              imageHeight: 90,
              imageClipped: false
            },
            dataLabels: {
              name: {
                show: false,
                color: '#fff'
              },
              value: {
                show: true,
                color: '#333',
                offsetY: 70,
                fontSize: '22px'
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }},
        stroke: {
          lineCap: 'round'
        },
        labels: ['Volatility'],
      },
    
    
    };

    return (
      <div className='Skills'>
        <div className='Topic'>Skills</div> 
        <div className='Skill'>Python</div>
        <div className='Graph'>
        <ReactApexChart options={state.options} series={state.series} type="radialBar" height={300} />
        </div>
        <div className='SkillDescription'>Lörem ipsum sosänat 
potuligt eurogisk. Geoda
jivis, logörtad. Tide 
euron mytostik. </div>
      </div>
    )
  }
}

export default Skills
