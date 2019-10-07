import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

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

const submit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file)
  
    try {
        const res = await axios.post('https://vacation-planner-bw.herokuapp.com/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log('res', res.data.filePath)
        // setVacation({...vacation, img: res.data.fileName})

       const { fileName, filePath } = res.data; 
       setUploadedFile({ fileName, filePath})
    } catch(err){
        if (err.response.status === 500) {
            console.log('There was a problem with the server');
          } else {
            console.log(err.response.data.msg)
        }
    }

//    try { 
//        const re = await axios.post('https://vacation-planner-bw.herokuapp.com/api/vacations', vacation)
       

//     }

//     catch(err) {
//         console.log(err)
    
// }
}

const change = e => {
    e.preventDefault();
    console.log('yep')
}

const onChange = e => {
    setVacation({[e.target.name]: e.target.value})

}
console.log(vacation.img)
// const img = () => {
// useEffect(() => {
//     setVacation({...vacation, img: filename});
// }
//     }, []);
console.log(uploadedFile)

    return (
        <Fragment>
            <form onSubmit={submit} >
            <div className="custom-file">
                {/* <input
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
                    type="text"
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
                    /> */}
                <input type="file" class="custom-file-input" id="customFile" onChange={changeHandler} />
                <label class="custom-file-label" htmlFor="customFile">
                {filename}
                </label>
            </div>
            <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
            </form>
            {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}        </Fragment>
    )
}

export default FileUpload
