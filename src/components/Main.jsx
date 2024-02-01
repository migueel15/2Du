import { Text, View } from 'react-native';
import ListComponent from './ListComponent';

// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('../../2Du.db', (err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log('Connected to the chinook database.');
//   });
//   let list = [];
//   db.serialize(() => {
//     db.each(`SELECT *,
//              FROM Lista`, (err, row) => {
//       if (err) {
//         console.error(err.message);
//       }
//       list.push({id: row.id, nombre: row.nombre});
//     });
//   });

const Main = () => {
  return (
    <ListComponent id='1' name= "coral" imagen="dawda"  />
  );
};

export default Main;
n;
