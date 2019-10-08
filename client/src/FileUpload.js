import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [vacation, setVacation] = useState({
       
           cost: '',
           description: '',
           destination: '',
           start_date: '',
           end_date: '',
           user_id: '',
           activities: '',
           img: ''
    
       });
console.log(file.name)
const changeHandler = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);

    
}

const upload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file)
  
    try {
        const res = await axios.post('http://localhost:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
       
       const { fileName, filePath } = res.data; 
       setUploadedFile({ fileName, filePath})
       setVacation({...vacation, img: filePath});
    } catch(err){
        if (err.response.status === 500) {
            console.log('There was a problem with the server');
          } else {
            console.log(err.response.data.msg)
        }
    }

}


const submit = async e => {
    e.preventDefault();
   
    
   try { 
       const re = await axios.post('https://vacation-planner-bw.herokuapp.com/api/vacations', vacation)
       

    }

    catch(err) {
        console.log(err)
    
}
}

const change = e => {
    e.preventDefault();
    console.log('yep')
}
console.log('img', vacation.img)

const onChange = e => {
    setVacation({[e.target.name]: e.target.value})

}
console.log(vacation.img)
// const img = () => {
// useEffect(() => {
//     
// }
//     }, []);
console.log(uploadedFile)

    return (
        <Fragment>
            
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Post Vacation
</button>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Add a Vacation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form name="form" onSubmit={submit} >
                <div className="custom-file">
                    <input
                        type="text"
                        className="form-control"
                        name="destination"
                        value={vacation.destination}
                        onChange={(e) => {
                            setVacation({...vacation, destination: e.target.value })
                        }}
                        placeholder="destination"
                        />
                        <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={vacation.description}
                        onChange={(e) => {
                            setVacation({...vacation, description: e.target.value})
                        }}
                        placeholder="description"
                        
                        />
                        <input
                        type="text"
                        className="form-control"
                        name="cost"
                        value={vacation.cost}
                        onChange={(e) => {
                            setVacation({...vacation, cost: e.target.value})
                        }}
                        placeholder="cost"
                        />
                        <input
                        type="date"
                        className="form-control"
                        name="start_date"
                        value={vacation.start_date}
                        onChange={(e) => {
                            setVacation({...vacation, start_date: e.target.value})
                        }}
                        placeholder="start_date"
                        />
                        <input
                        type="text"
                        className="form-control"
                        name="end_date"
                        value={vacation.end_date}
                        onChange={(e) => {
                            setVacation({...vacation, end_date: e.target.value})
                        }}
                        placeholder="end_date"
                        />
                        <input
                        type="text"
                        className="form-control"
                        name="activities"
                        value={vacation.activities}
                        onChange={(e) => {
                            setVacation({...vacation, activities: e.target.value})
                        }}
                        placeholder="activities"
                        />
                        <input
                        type="text"
                        className="form-control"
                        name="user_id"
                        value={vacation.user_id}
                        onChange={(e) => {
                            setVacation({...vacation,user_id: e.target.value})
                        }}
                        placeholder="user_id"
                        />
                </div>   
                <form  className="file" onSubmit={upload}>
                    <input type="file"  onChange={changeHandler} />          
                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
                </form> 
                <button className="submit-button" onSubmit={submit} type="submit">Submit</button> 
  
                </form>        
                
            {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                    </Fragment>
    )
}

export default FileUpload
