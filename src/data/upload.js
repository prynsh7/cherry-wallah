import { message } from "antd";
import { UploadAPI } from "../apis/uploadAPI";


export const handleFileUpload =async (e,name,id) => {
    console.log(e);
    let fd = new FormData()
    const ff = e.target.files[0]
    console.log(ff);
    fd.append('file', e.target.files[0])

    var url;

    try{
        const data = await UploadAPI.upload(fd, name, id)
        console.log(data);
        if(data.success){
            url = data.preSignedUrl
        }
    }
    catch(err){
        message.error('File Not Uploaded')
    }

    return url
}