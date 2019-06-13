const MongoClient = require("mongodb").MongoClient;
const auth = require("./../authorization/auth");

module.exports = function(context, req) {
	context.log("GetHeroes HTTP trigger function processed a request");

	const mongoUrl = `mongodb://${process.env.CosmosDBUser}:${process.env.CosmosDBPasswordUrl}@${process.env.CosmosDBUser}.documents.azure.com:${process.env.CosmosDBPort}/?ssl=true`;

	MongoClient.connect(mongoUrl, { auth: auth, useNewUrlParser: true }, (err, database) => {
		if (err) {
			throw err;
		}
		context.log("Connected");

		const db = database.db(process.env.CosmosDB);
		db.collection("heroes")
			.find()
			.toArray((err, result) => {
				if (err) {
					throw err;
				}
				result.forEach((hero) => delete hero._id);
				context.res = {
					body: result,
				};

				context.done();
				database.close();
			});
	});
};
