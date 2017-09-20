from pymongo import MongoClient

client = MongoClient('localhost', 27017)

root = client.root

print("Connected to db")

dbQuery1 = root.grounds_volleyball.find({}, {'parent_id': 1})   # Finds ids of all grounds with uuids
courts = list(dbQuery1)

for court in courts:
	court_parent = court['parent_id']
	dbQuery2 = root.parent.find({'id': court_parent})
	parent_ground = list(dbQuery2)
	if len(parent_ground) == 0:
		root.grounds_volleyball.remove({
			"_id": court['_id']
		})
	else:
		root.grounds_volleyball.update(
			{
				"_id": court['_id']
			},
			{
				"$set": {
					"parent_ground_id": parent_ground[0]['_id']
				}
			}
		)