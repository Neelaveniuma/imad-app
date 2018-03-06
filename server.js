var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
  host: 'db.imad.hasura-app.io',
  user: 'neelsvicky',
  password:process.env.DB_PASSWORD,
  port: '5432',
  database: 'neelsvicky'
};


var app = express();
app.use(morgan('combined'));

var articles = {
        'article-daffodils': {
            title:'Daffodils | Neelaveni',
            heading:'Article-Daffodils',
            date: 'Feb 20, 2018',
            image: '<img src="http://cdn0.wideopeneats.com/wp-content/uploads/2017/04/DaffodilsFI.png" alt="Daffodils" style="width:55%" class="img-medium"/> ',
            content: `
                    <p>Daffodils, the flowers symbolizing friendship, are some of the most popular flowers exclusively due to their unmatched beauty. Daffodils belong to the genus Narcissus. <strong>Daffodil flowers have a trumpet-shaped structure set against a star-shaped background.</strong> Often the trumpet is in a contrasting color from the background.The appeal of daffodils lies in their beauty and durability. Their flowers come in a range of colors like yellowand white and have contrasting cups of orange or pink and a variety of shapes and sizes.</p>
                    <p>These easy and reliable spring-flowering bulbs multiply quickly and return to bloom year after year. They are not fussy about soil, will grow in sun or shade and are not bothered by deer and other critters.Though yellow is by far the most common color for daffodils, the flowers also come in white, cream, orange and even pink. </p>
                    <div class = "box">
                         <div class ="content"><h3>Poem by William Wordsworth</h3>
                                <p>I wandered lonely as a cloud <br>That floats on high o'er vales and hills, <br>When all at once I saw a crowd, <br>A host, of golden daffodils;<br> Beside the lake, beneath the trees, <br> Fluttering and dancing in the breeze.<br>
                                    Continuous as the stars that shine<br> And twinkle on the Milky Way, <br> They stretch'd in never-ending line <br>
                                    Along the margin of a bay:<br> Ten thousand saw I at a glance,<br> Tossing their heads in sprightly dance.<br>
                                    The waves beside them danced; but they <br> Out-did the sparkling waves in glee:</p>
                         </div>
                         <div class ="places"><h4> Places to Visit </h4>
                             <ol>
                                 <li>Netherlands</li>
                                 <li>France</li>
                                 <li>Germany</li>
                                 <li>England</li>
                                 <li>USA</li>
                            </ol>
                         </div>`,
            comment:`  <br>           
                    <div class ="commentbox"> 
                        <textarea id="comment" rows="5" cols="50"></textarea>
                        <input type = "submit" value = "Submit" id ="submit_btn1"></input> <br>
                        <p id="para"></p>
                    </div> `   
                  
        },
        
        'article-tulips': {
            title:'Tulips | Neelaveni',
            heading:'Article-Tulips',
            date: 'Feb 20, 2018',
            image: '<img src="https://www.roadscholar.org//imagevault/publishedmedia/oaxvnetjki12mu53rlwu/22231-netherlands-tulips-windmill-lghoz.jpg" alt="Tulips" style="width:55%" class="img-medium"/>',
            content: `
                    <p><strong>Tulips (Tulipa)</strong>form a genus of spring-blooming.The flowers are usually large, showy and brightly coloured, generally red, yellow, or white. They often have a different coloured blotch at the base of the tepals internally. Because of a degree of variability within the populations, and a long history of cultivation, classification has been complex and controversial.</p>
                        <p>Tulips originally were found in a band stretching from Southern Europe to Central Asia. In their natural state they are adapted to steppes and mountainous areas with temperate climates. Flowering in the spring, they become dormant in the summer once the flowers and leaves die back, emerging above ground as a shoot from the underground bulb in early spring. </p>
                    <div class = "box">
                         <div class ="content"><h3>Types of Tulips</h3>
                                <ol> 
                                     <li>Standard Tulips</li>
                                     <li>Double Bloom</li>
                                     <li>Parrot Tulips</li>
                                     <li>Fringed Tulips</li>
                                     <li>Bi-Color Standard Tulips</li>
                                     <li>Rembrandt</li>
                                     <li>Fosteriana Tulips</li>
                                     <li>Kaufmanniana Tulips</li>
                                     <li>Lily Flowering Tulips</li>
                                     <li>Viridiflora Tulips</li>
                                     <li>Darwin Hybrids</li>
                                     <li> Single Late Tulips</li>
                                     <li>Greigii Tulips</li>
                                </ol>
                         </div>
                         <div class ="places"><h4> Places to Visit </h4>
                             <ol>
                                 <li>Netherlands</li>
                                 <li>England</li>
                                 <li>USA</li>
                                 <li>South korea</li>
                                 <li>Srinagar, India</li>
                                 <li>Japan</li>
                                 <li>Turkey</li>
                                 <li>Taiwan</li>
                                 <li>china</li>
                                 <li>Australia</li>
                            </ol>
                          </div>`,
            comment:`   <br>
                          <div class ="commentbox"> 
                            
                            <textarea id="comment" rows="5" cols="50">Comment</textarea>
                            <input type = "submit" value = "Submit" id ="submit_btn1"></input> <br>
                            <p id="para"></p>
                            
                          </div> `              
                         
                      
                   
        },
        
        'article-roses': {
             title:'Roses | Neelaveni',
            heading:'Article-Roses',
            date: 'Feb 20, 2018',
            image:'<img src="https://thumbs.dreamstime.com/b/rose-field-pink-roses-bloom-covered-hill-71519718.jpg" alt="Roses"                  style="width:50%" class="img-medium"/>',
            content: `
                    <p>A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over a hundred species. They form a group of plants that can be erect shrubs, climbing or trailing with stems that are often armed with sharp prickles. Flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds. Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa.</p>
                    <p> Species, cultivars and hybrids are all widely grown for their beauty and often are fragrant. Roses have acquired cultural significance in many societies. Rose plants range in size from compact, miniature roses, to climbers that can reach seven meters in height. Different species hybridize easily, and this has been used in the development of the wide range of garden roses.</p>
                <div class = "box">
                        <div class ="content"><h3>Types of Roses</h3>
                            <ol> 
                                 <li>Hybrid tea</li>
                                 <li>Floribunda</li>
                                 <li>Grandifloras</li>
                                 <li>Miniature</li>
                                 <li>Climbers</li>
                                 <li>Shrub</li>
                                 <li>Trees</li>
                                 <li>Rambler</li>
                                 <li>Pioneer</li>
                                 <li>Butterfly</li>
                                 <li>English</li>
                                 <li> Grandcover</li>
                             </ol>
                        </div>
                        <div class ="places"><h4> Places to Visit </h4>
                            <ol>
                                 <li>Bulgaria</li>
                                 <li>France</li>
                                 <li>Japan</li>
                                 <li>Australia</li>
                            </ol>
                        </div>`,
            comment: ` <br>
                    <div class ="commentbox"> 
                        
                        <textarea id="comment" rows="5" cols="50"></textarea>
                        <input type = "submit" value = "Submit" id ="submit_btn1"></input> <br>
                        <p id="para"></p>
                        
                     </div> `            
               
        },
};


function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var image = data.image;
    var heading = data.heading;
    var content = data.content;
    var comment = data.comment;
var htmlTemplate = `
<!doctype html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title>${title}</title>
         <meta name = "viewport" content = "width = device-width, initial-scale = 1"/>
    </head>
    <body>
        <div class="center">${image}</div>
        <div><a href="/">Home</a></div>
        <div>
            <h3>${heading}</h3>
        </div>
        <div>${date}</div>
        <div class="textbox">${content}</div> 
        <div class ="commentbox">${comment}</div>
    </body>
</html>`
;
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function(req, res) {
   pool.query('SELECT * FROM test', function(err, result) {
      if(err) {
          res.status(500).send(err.toStringigy());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   }); 
});

var counter =0;
app.get('/counter', function(req, res){
    counter += 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res){
    var name= req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

var comments = [];
app.get('/submit-comment', function (req, res){
    var comment= req.query.comment;
    comments.push(comment);
    res.send(JSON.stringify(comments));
});



app.get('/:articleName', function (req,res){
    var articleName = req.params.articleName;
   res.send(createTemplate (articles[articleName]));
});



/*app.get('/article-tulips', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-tulips.html'));
});

app.get('/article-roses', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-roses.html'));
});*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
