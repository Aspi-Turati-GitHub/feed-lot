const path=require('path')
const express=require("express")
const app=express()

// app.set('views','./'); //en los set el parametro de la izquierda no es arbitrario se respeta el views
app.set('port', process.env.PORT || 80);
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'src/views/index.html'));
})
app.get('/apagar', function (req, res) {
  servidor.close();
})
app.use(express.static(path.join(__dirname,'src')));

app.use((req,res,next)=>{
  res.status(404).send('no existe esta ruta');//parte para el navegador , otra parte para usuario
});

var servidor=app.listen(app.get('port'))