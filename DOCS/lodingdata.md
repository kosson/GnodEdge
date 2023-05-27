# Loading data in GnodEdge

Data is loaded in the database launching the application from terminal with `node index.js`. The first thing that the app is doing is to investigate if the table `articles` exists. If it exists, ask user if she/he wants to wipe clean the data from the table. If it doesn't exists, the table will be autamatically created and populated with the source data file from the subdirectory `sourcefile`.

Having already installed TablePlus, you open the `publication.sqlite` file and check for data.

![](DataLoadedTablePlusConfirmation.png)

Mind that the structure of the `articles` table is as following:

```javascript
db.exec(`
CREATE TABLE articles
(
    Id           VARCHAR(10),
    Label        VARCHAR(50),
    Year         INT,
    Author       VARCHAR(20),
    JournalAccr  VARCHAR(10),
    Kw           VARCHAR(50)
)
`);
```

Observe that it follows the CSV variant you feed the app. but rearanging the columns in such a way that it satisfies The format Gephi is expectiv. The ids are the `zotkey` column form the source file, being the key I obtained at the export of the data from Zotero.

For creating the necessary data, I follow the guide presented by Clement Levallois here [5 methods to create and import networks in Gephi](https://www.youtube.com/watch?v=ltkzcSAStYo)