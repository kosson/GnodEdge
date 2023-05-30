# Loading data in GnodEdge

Data is loaded in the database launching the application from terminal with `node index.js`. The first thing that the app is doing is to investigate if the table `articles` exists. If it exists, ask user if she/he wants to wipe clean the data from the table. If it doesn't exists, the table will be automatically created and populated with the source data file from the subdirectory `sourcefile`.

After the creation of the descriptors table and the first wave of edges, the app must be run again from terminal with `node index.js` to procede with enrichment.

Having already installed TablePlus, you open the `publication.sqlite` file and check for data.

![](DataLoadedTablePlusConfirmation.png)

Observe that it follows the CSV variant you feed the app. Rearange the columns in such a way that it satisfies The format Gephi is expecting. The ids are the `zotkey` column form the source file, being the key I obtained at the export of the data from Zotero.

For creating the necessary data, I follow the guide presented by Clement Levallois here [5 methods to create and import networks in Gephi](https://www.youtube.com/watch?v=ltkzcSAStYo)
