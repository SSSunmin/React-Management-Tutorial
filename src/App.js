import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';
import Table from'@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles'; 
import Paper from'@material-ui/core/Paper';

const styles = theme =>({
  root:{
    width : '100%',
    marginTop : theme.spacing.uint * 3,
    overflowX :"auto"
  },
  table:{
    minWidth:1080
  }

})

const customers = [
  {
  'id' : 1,
  'image':'https://placeimg.com/100/100/any',
  'name' : '임선민',
  'birthday':'931129',
  'gender':'여자',
  'job': '플머'
},
{
  'id' : 2,
  'image':'https://placeimg.com/100/100/1',
  'name' : '박소영',
  'birthday':'930821',
  'gender':'여자',
  'job': '디자이너'
},
{
  'id' : 3,
  'image':'https://placeimg.com/100/100/2',
  'name' : '김정은',
  'birthday':'931029',
  'gender':'여자',
  'job': '품질관리'
},
]

class App extends Component {
  render() {
    const{classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { customers.map(c=>{ return(<Customer key ={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
          </TableBody>
        </Table>
      
    
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
