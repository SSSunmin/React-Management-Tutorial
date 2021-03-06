import React from "react";
import {post} from 'axios';
import { response } from "express";


class CustomerAdd extends React.Component {

    constructor(props){
        super(props);
        this.state={
            file:null,
            userName:'',
            birthday:'',
            gender:'',
            job:'',
            fileName:''
        }
    }

    handleFormSubmit=(e)=>{
        e.preventDefault()
        this.addCustomer()
            .then((response)=>{
                console.log(response.data);
            })
    }

    handleFileChange=(e)=>{
        this.setState({
            file:e.target.files[0],
            fileName : e.target.value
        })
    }

    handleValueChange=(e)=>{
        let nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);
    }

    addCustomer =()=>{
        const url ='/api/customers';
        const formData = new FormData();
        formData.append('image',this.state.file);
        formData.append('name',this.state.name);
        formData.append('birthday',this.state.birthday);
        formData.append('gender',this.state.gender);
        formData.append('job',this.state.job);
        const config ={
            'content-type':'multipart/form-data'
        }
        return post(url, formData, config); //해당 url에 formData를 해당 환경에 맞춘 헤더를 붙여서 서버에 보낼수 있도록 해줌
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객추가</h1>
                프로필 이미지:<input type="file" name ="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/>
                이름: <imput type ="text" name ="userName" value={this.state.userName} onChange={this.handleValueChange}/>
                생년월일 : <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/>
                성별:<input type="text" name ="gender" value={this.state.gender} onChange={this.handleValueChange}/>
                직업:<input type ="text" name ="job" value={this.state.job} onChange={this.handleValueChange}/>
                {/* 프로필 이미지:<input type="file" name ="file" file={this.state.file} value={this.state.fileName} />
                이름: <imput type ="text" name ="userName" value={this.state.userName} />
                생년월일 : <input type="text" name="birthday" value={this.state.birthday} />
                성별:<input type="text" name ="gender" value={this.state.gender} />
                직업:<input type ="text" name ="job" value={this.state.job} /> */}
                <button type="submit">추가하기</button>
            </form>
        );
    }
}

export default CustomerAdd;