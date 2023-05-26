# GnodEdge

![](intro.png)

Creator of nodes and edges for Gephi

Requirements:

- Install Obsidian from Obsidian.md. Create a new vault having the subdirectory gnodedgeplan as target. Opening Obsidian, you get a visualization with the planned steps in application development;
- Ensure you have Node.js version 20.2.0 (i suggest installing with nvm);
- Create a file in the root of the project called publications.sqlite. This will be the Sqlite3 database.

Important note: This is work in progress. The first stable app will be marked by the first release.

Mind that the structure of the `articles` table is as following:

```javascript
db.exec(`
CREATE TABLE articles
    (
        zotkey           VARCHAR(10),
        year             INT,
        author           VARCHAR(50),
        title            VARCHAR(20),
        journalAccr      VARCHAR(10),
        kw               VARCHAR(50)
    )
`);
```

Observe that it follows the CSV variant you feed the app. The property `zotkey` is the key I obtained at the export of the data from Zotero.