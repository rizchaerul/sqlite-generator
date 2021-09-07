const DBPath = "./db.sqlite";

(async () => {
    const { open } = require("sqlite");
    const sqlite3 = require("sqlite3");

    const db = await open({
        filename: DBPath,
        driver: sqlite3.Database
    });

    await db.migrate({
        migrationsPath: "./migrations",
        force: true
    });

    // Testing
    const cats = await db.all("SELECT * FROM cat");
    console.log(cats);
})();
