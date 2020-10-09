const express = require("express");
// const https = require('https');
// const inforUser = require("./src/models/userinfo");
// const gameModel = require("./src/models/game.js");
const datajso=require('./data.json')
const mongoose = require("mongoose");
// const { getEnvironmentVariables } = require("./envoirments/env");
// const expressGraphQL = require("express-graphql");
var cors = require("cors");
const MainSchema = require("./graphql/schema");
var app = express();
var bodyParser = require('body-parser')

console.log("datajso",datajso)

var port = process.env.PORT || 3002;

app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.options('*', cors())

const uri = "mongodb://test:128SgqEEQzxpCE8m@cluster0-shard-00-00.kw5yl.mongodb.net:27017,cluster0-shard-00-01.kw5yl.mongodb.net:27017,cluster0-shard-00-02.kw5yl.mongodb.net:27017/test?ssl=true&replicaSet=atlas-11cxv8-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    app.listen(port, () => console.log(`Example app listening on port port!m  and database`))
})
.catch(err => console.log(err))


// app.get('/', (req, res) => {
//   res.send('Hello World, from express');
// });


// app.get('/alluser', async(req, res) => {

//  let docs = await inforUser.find({ });
//  res.send(docs)
// }
// )
// app.post('/findoneuser', async(req, res) => {

 

//  let docs = await inforUser.find({email:req.body.email ,password:req.body.password});
//  console.log(" console.log* console.log*",docs);
//  res.send(({data:docs}))
// }
// )



// app.post('/gamefind', async(req, res) => {

  

//   let docs = await gameModel.find({gameName:req.body.gameName,email:req.body.email});
//   let docsALL = await gameModel.find().sort({userScore:-1}).limit(10);
// var finalData=[]
// console.log("finalData",finalData,docsALL)
// docsALL.map((item,index)=>{finalData.push(
//   {
//     gameName: item.gameName,
//     phoneNumber: item.phoneNumber,
//     userScore: item.userScore,
//     name: item.name,
//     email: item.email,
//     rank:index+1
  
//   })})

// console.log("finalData",finalData,docsALL)
//   res.send({data:{docs:docs,finalData}})
//  }
//  )
 


// app.post('/gamedataenter', async(req, res) => {

// console.log("sss",JSON.stringify(req.body))

// gameModel.findOneAndUpdate({gameName:req.body.gameName ,phoneNumber:req.body.phoneNumber },null, function (err, docs) { 



  // let check=await gameModel.find({gameName:req.body.gameName ,phoneNumber:req.body.phoneNumber})
  //  console.log("dataaa", check)
  // if(check.length >0)
  // {


    // const filter = { gameName:req.body.gameName ,phoneNumber:req.body.phoneNumber };
    // const update = { userScore: req.body.userScore };  "phoneNumber": "123456789",  "phoneNumber": "1234564",
    
   
    // let doc = await gameModel.findOneAndUpdate(filter, update); 
    
  // let newgame = new gameModel({

  //   gameName: req.body.gameName,
  //   phoneNumber:  req.body.phoneNumber,
  //   userScore:  req.body.userScore,
  // })

  // try {

  //   if( parseInt(check[0].userScore)<parseInt(req.body.userScore))
  //   {

  //     gameModel.findOneAndUpdate({gameName:req.body.gameName ,phoneNumber:req.body.phoneNumber}, { userScore:req.body.userScore }, function(err, result) {
  //       if (err) {
  //         res.send(err);
  //       } else {
  //         res.send(result);
  //       }
  //     })

    //   gameModel.updateOne({userScore:parseInt(req.body.userScore)}, function (err, docs) { 
    //     if (err){ 
    //         console.log(err) 
    //     } 
    //     else{ 
    //         console.log("Updated Docs : ", docs); 
    //         console.log(docs)
    //         return  res.send(docs);
    //     } 
    // })

    
   
//     }
//     else{
//       return  res.send({data:"alredy high score"})

//     }
   
   
//   } catch (error) {
//     return error;
//   }
// }
// else{
//   let newgame = new gameModel({

//     gameName: req.body.gameName,
//     phoneNumber:  req.body.phoneNumber,
//     userScore: parseInt(req.body.userScore),
//     name:req.body.name,
//     email:req.body.email
//   })
//   try {
//     let response = await newgame.save()
//     res.send(response);
//     return response;
//   } catch (error) {
//     return error;
//   }
// }

//  }
//  )




// app.post('/createuser', async(req, res) => {
  
 

//   var newUser = new inforUser({
//     name: req.body.name,
//     age: req.body.age,
//     phoneNumber: req.body.phoneNumber,
//     status: req.body.status,
//     email: req.body.email,
//     token: req.body.token,
//     password: req.body.password
//   });
//   try {
//     let response = await newUser.save();
//     res.send(response);
//     return response;
//   } catch (error) {
//     return error;
//   }
  
 
// });










// const  bodyParser =require('body-parser')
// // const  { ApolloServer, gql }  =from( 'apollo-server-express')
// const  { createServer } =require( 'http')
// const  { execute, subscribe } =require( 'graphql')
// const  { PubSub } =require( 'graphql-subscriptions')
// const  { SubscriptionServer } =require( 'subscriptions-transport-ws')
// // const  { myGraphQLSchema } =from( './my-schema')




// app.use('/graphql', bodyParser.json());

// // const apolloServer = new ApolloServer({ schema: MainSchema });
// // apolloServer.applyMiddleware({ app });

// // const pubsub = new PubSub();
// const server = createServer(app);

// server.listen(4040, () => {
//     new SubscriptionServer({
//       execute,
//       subscribe,
//       schema: MainSchema,
//     }, {
//       server: server,
//       path: '/subscriptions',
//     });
// });