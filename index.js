const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');
const path = require('path');

const schema = {
    "Community": {
        prop: "community",
        type: String
    },
    "USERS": {
        prop: "email",
        type: String
    },
    "NAME": {
        prop: "nameSurname",
        type: String
    },
    "ABOUT": {
        prop: "aboutMe",
        type: String
    },
    "Company": {
        prop: "company",
        type: String
    },
    "Position": {
        prop: "position",
        type: String
    },
    "Looking for": {
        prop: "lookingFor",
        type: String
    },
    "phone": {
        prop: "phoneNumber",
        type: String
    }
}
// File path.
readXlsxFile(__dirname + '/input/data.xlsx', { schema }).then((result) => {
    // `rows` is an array of rows
    // each row being an array of cells.
    if (result.errors.length > 0) {
        console.error(result.errors)
    } else {
        fs.writeFileSync(path.resolve(__dirname, './output/output.json'), JSON.stringify(result.rows.filter(r => !!r.email)));
        console.log('Generated json');
    }
}).catch(err => console.error(err));