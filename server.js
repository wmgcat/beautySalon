const express = require('express'),
      app = express(),
      path = require('path'),
      sqlite3 = require('sqlite3').verbose();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

app.get('/get/services', (req, res) => {
      const db = new sqlite3.Database('./database.db', err => {
            if (err) return console.error(err.message);
            db.all("SELECT * FROM `services`", (err, rows) => {
                  if (err) return console.error(err.message);

                  for (const row of rows) {
                        if (row.props)
                              row.props = row.props.split(', ');
                  }
                  res.send(rows);
            });
            db.close();
      });
});

app.get('/get/workers', (req, res) => {
      const db = new sqlite3.Database('./database.db', err => {
            if (err) return console.error(err.message);
            db.all("SELECT * FROM `workers`", (err, rows) => {
                  if (err) return console.error(err.message);
                  
                  res.send(rows);
            });
            db.close();
      });
});

app.get('/get/info', (req, res) => {
      res.send({
            title: 'Delote-Beauty',
            address: 'Новоостровский проспект, дом 36 лит. С',
            instagram: 'https://google.com',
            phones: [
                  '+7 (812) 123-45-67',
                  '+7 (911) 123-45-67'
            ],
            work: {
                  'Пн-Пт': {
                        to: '10:00',
                        from: '21:00'
                  },
                  'Сб-Вс': {
                        to: '11:00',
                        from: '20:00'
                  }
            }
      });
});


app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running.... port: ${port}`));