export const home=(req,res)=>{
    res.send("local host running")
}

export const reactForm =(req,res)=>{
    console.log("React Direct Form Submission");
    console.log(req.body);

}

export const axiosJsonData =(req,res)=>{
    console.log("axios json data Submission");
    console.log(req.body);
}


export const axiosURLENCODEDFormData =(req,res)=>{
    console.log("axios Form URL ENCODED data Submission");
    console.log(req.body);
}


export const axiosAppendFormData =(req,res)=>{
    console.log("axios APPEND NEW FORM data Submission");
    console.log(req.body);
}


export const QueryData =(req,res)=>{
    console.log("Query data Submission");
    console.log(req.query);
}
