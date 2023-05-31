# How to work with GnodEdge

The first thing you need is to have your data put in the subdirectory sourcefile. There is a file in the sudirectory to guide you.

Run the application once to create the entities in the tables `articles` and `descriptors`. These entities will be considered the nodes in the future network. The data from these two tables needs to be merged together. Ypu need to re-run the app to insert more info into the descriptors and insert additional edges that cannot be created at the first pass.

The `edges` table is imported in Data lab as is.

In case strange or normal operations happen, it is captured in some log files that will appear in the root of the application directory. They are meant to give you insight to what has gone wrong, or what needs to be fixed in data.