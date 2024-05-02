import db from "./connection.js"

const isDeleteMode = process.argv.includes('delete');

if (isDeleteMode){
await db.run(`DROP TABLE IF EXISTS volcanoes`)
await db.run(`DROP TABLE IF EXISTS villages`)
}

//create volcanoes talble

//DDL
db.exec(`CREATE TABLE IF NOT EXISTS volcanoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name VARCHAR(255) NOT NULL,
    isActive BOOLEAN,
    type TEXT CHECK (type IN ('Caldera', 'Underwater', 'Super volcanoe', 'Underground'))
) 
`
);

db.exec(`CREATE TABLE IF NOT EXISTS villages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    volcanoe_id INTEGER,
    FOREIGN KEY (volcanoe_id) REFERENCES villages (id)
)
`)

//DML
// Create some rows in volcanoes and villages
if (isDeleteMode){
await db.run(`INSERT INTO volcanoes (Name, isActive, type) VALUES ('YellowStone', TRUE, 'Caldera')`)
await db.run(`INSERT INTO volcanoes (Name, isActive, type) VALUES ('Mount fuji', TRUE, 'Super volcanoe')`)
await db.run(`INSERT INTO volcanoes (Name, isActive, type) VALUES ('Pompeii', False, 'Underground')`)

await db.run(`INSERT INTO villages (name, volcanoe_id) VALUES ('America village', 1) `);
await db.run(`INSERT INTO villages (name, volcanoe_id) VALUES ('Tokyo', 1) `);
await db.run(`INSERT INTO villages (name, volcanoe_id) VALUES ('Pompie', 1) `);
}