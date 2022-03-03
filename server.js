const express=require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/customers', (req, res)=>{
    res.send([
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
      ]);
});

app.listen(port,()=>console.log(`listen on port ${port}`));