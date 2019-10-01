import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});

const changeHandler = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);

    
}

const submit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file)

    try {
        const res = await axios.post('https://vacation-planner-bw.herokuapp.com/api/vacations/uploads', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

       const { fileName, filePath } = res.data; 
       setUploadedFile({ filename, filePath})
    } catch(err){
        if(err.response.status === 500) {
            console.log('there was a problem with the server')
        } else {
            console.log(err.response.data.msg)
        }
    }
}

    return (
        <Fragment>
            <form onSubmit={submit}>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" onChange={changeHandler} />
                <label class="custom-file-label" htmlFor="customFile">
                {filename}
                </label>
            </div>
            <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
            </form>
        </Fragment>
    )
}

export default FileUpload
