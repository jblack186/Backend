
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {withFormik, Form, Field} from 'formik'
// import VacationCard from './vacationCard.js'
import axios from 'axios'
import * as yup from 'yup';
// import '../travelForm.css'

const TravelForm = ({status, touched, errors}) => {
    const [vacations, setVacations, destination] = useState([])
    const addDestination = (e) =>{
        e.preventDefault();
        const token = localStorage.getItem('token')
        axios.post('https://vacation-planner-bw.herokuapp.com/api/vacations/destination', destination)
        .then(response => {
           

           console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
      
    }
    
    
    const addActivity = () => {

    }
    const Button = styled.button`
        font-size: 1rem;
        border-radius: .5rem;
        font-family: 'Oswald', sans-serif;
    `
    useEffect(()=>{
        if(status) {
            setVacations([...vacations, status])
        }
    }, [status])
    return (
        <div className='container'>
        <Form>
            <h1>Add Your Vacation Details 🔆</h1>
            <div className='forms'>
                <label>
                    <span className='label'>Destination:  </span>
                    <Field className='form' type='text' name='destination'/>
                    <Button onClick={addDestination}>+</Button>
                    {touched.destination && errors.destination && <p className='error'>{errors.destination}</p>} 
                </label><br/>
                <label>
                    <span className='label'>Date Range:  </span>
                    <Field className='form' type='date' placeholder='Start Date' name='startRange' /> <span className='label'>to</span> <Field type='date' name='endRange'/>    
                    {touched.startRange && errors.startRange && <p className='error'>{errors.startRange}</p>}
                    {touched.endRange && errors.endRange && <p className='error'>{errors.endRange}</p>}
                </label><br/>
                <label>
                    <span className='label'>Anticipated Cost: </span>
                    <Field className='form' type='number' name='cost'/>
                </label>
                <h3>Activities</h3>
                <Field type='text' className='form' name='activity'/><Button>+</Button>
                <h3>Description</h3>
                <Field type='text' className='form' name='description'/>
                {touched.description && errors.description && <p className='error'>{errors.description}</p>}
            </div>
            <Button className='submit' type='submit'>Add Vacation</Button>
        </Form>
        <div>
            {/* {vacations.map(vacation=>(
                <VacationCard 
                destination={vacation.destination} 
                startRange={vacation.startRange}
                endRange={vacation.endRange}
                description={vacation.description}
                cost={vacation.cost}
                />
            ))} */}
        </div>
        </div>
    )
}



export default withFormik({
    mapPropsToValues: (values) => {
        return{
            destination: values.destination || '',
            startRange: values.startRange || '',
            endRange: values.endRange || '',
            cost: values.cost || '',
            activity: values.activity || '',
            description: values.description || '',
        }
    }, 
    validationSchema: yup.object().shape({
        destination: yup.string().required('✔️Destination Field Must Be Filled Out'),
        startRange: yup.string().required('✔️Start Field Must Be Filled Out'),
        endRange: yup.string().required('✔️End Field Must Be Filled Out'),
        description: yup.string().required('✔️Description Must Be Filled Out')
    }),
    handleSubmit: (values, {setStatus})=>{
        console.log(values)
        axios.post('https://vacation-planner-bw.herokuapp.com/api/vacations', values)
            .then((res)=>{
                setStatus(res.data)
                
            })
            .catch((err)=> {
                console.log(err)
            }) 
    }
})(TravelForm)