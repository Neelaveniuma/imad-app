var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleDaffodils = {
    title:'Daffodils|Neelaveni',
    heading:'article-daffodils',
    date: 'Feb 20, 2018',
    content: `
            <p>Daffodils, the flowers symbolizing friendship, are some of the most popular flowers exclusively due to their unmatched beauty. Daffodils belong to the genus Narcissus. <strong>Daffodil flowers have a trumpet-shaped structure set against a star-shaped background.</strong> Often the trumpet is in a contrasting color from the background.The appeal of daffodils lies in their beauty and durability. Their flowers come in a range of colors like yellowand white and have contrasting cups of orange or pink and a variety of shapes and sizes.</p>
            <p>These easy and reliable spring-flowering bulbs multiply quickly and return to bloom year after year. They are not fussy about soil, will grow in sun or shade and are not bothered by deer and other critters.Though yellow is by far the most common color for daffodils, the flowers also come in white, cream, orange and even pink. </p>
        </div>
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
              </div>`
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate = `
<!doctype html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title>${title}</title>
         <meta name = "viewport" content = "width = device-width, initial-scale = 1"/>
    </head>
    <body>
        <div class="center">
            <img src="http://cdn0.wideopeneats.com/wp-content/uploads/2017/04/DaffodilsFI.png" alt="Daffodils" style="width:55%" class="img-medium"/>
        </div>
        <div><a href="/">Home</a></div>
        <div>
            <h3>${heading}</h3>
        </div>
        <div>${date}</div>
        <div class="textbox">${content}</div>     
    </body>
</html>`
;
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-daffodils', function (req,res){
   res.send(createTemplate (articleDaffodils));
});

app.get('/article-tulips', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-tulips.html'));
});

app.get('/article-roses', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-roses.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
