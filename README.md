# GnodEdge

![](intro.png)

This is an application targeted at creation of nodes and edges out of bibliographical data. The resulting data refinement aim to become the imported nodes and edges for Gephi.

Purpose: the app is built out of the need to shape bibliographic data in such a way to be fast compatible with Gephi application. The purpose is to create the nodes table and the edges table very fast out of data saved from Zotero and cleaned a bit afterwards. For a good measure, take a look at the `data-prima-forma.csv` file to understand the reduced shape of the data from the extensive version that Zotero is producing.

The relations targeted are those established by the articles (as entities/nodes) and the keywords (concepts/indexing descriptors). Mind that the relation between a descriptor of an article has a weight of 1 hard coded in the app. The relation is hard coded as `Directed` because the descriptor point always to the article it *describes*.

In a future version I will find an optimization to create a set of nodes that finds the links between the articles via the descriptor (*verb*). And further in time the complex relations with the authors.

Requirements:

- This is a Linux/GNU working application. It was developed on Ubuntu distro. It has high chances to work also on Windows. It is not testes yet MS Windows. You could install WSL and run it under that layer. So, be mindful of this important aspect. Im future versions I will expand support for Windows.
- Install TablePlus application or any other application that will let you open an SQLite3 database file. The purpose of this application is to investigate the data, and in the end to save the data in order to import it in Ghephi.
- By the way, you need Gephi. Download it from here: https://gephi.org/users/download/.
- If you want to investigate the app internals, install Obsidian from Obsidian.md. Create a new vault having the subdirectory gnodedgeplan as target. Opening Obsidian, you get a visualization with the planned steps in application development;
- Ensure you have Node.js version 20.2.0 (i suggest installing with nvm);
- Create a file in the root of the project called publications.sqlite. This will be the Sqlite3 database.
- Create a subdirectory called `logs` in the project root. This is the place where all your logs will go. It proves useful for investigating some issues.
- Install the project packages running in terminal `npm install` and place the source file in the `sourcefile` subdirectory. Read the following documents to understand better what to do after these initial setup moves.

First things, first: read very, very, very carefully how to prepare the data opening [preparingdata](DOCS/preparingdata.md).

Details for setting up the data and following the stages of refining it into nodes and edges, here: [loadingdata](DOCS/lodingdata.md).
Details for using the app, in this section of the documentation: [operations](DOCS/operations.md).

This is version 1.0.0. If time allows it, it will be improved and maybe an interface. Now you have all you need to make a network of scientific papers. This application is as it is. I do not guarantee for the safety of your data. It is a well behaved application, but let's not sleep on that, shall we?!

For creating the necessary data, I followed the guide presented by Clement Levallois here [5 methods to create and import networks in Gephi](https://www.youtube.com/watch?v=ltkzcSAStYo)

(Teza UnitBv)