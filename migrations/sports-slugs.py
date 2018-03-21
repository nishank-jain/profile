from pymongo import MongoClient

client = MongoClient('localhost', 27017)

root = client.root

print("Connected to db")

dbQuery1 = root.grounds.find({})
grounds = list(dbQuery1)

for ground in grounds:
	ground_sports = ground['sports']
	sports = []
	for sport in ground_sports:
		new_sport = {
			"name": sport,
			"slug": sport.lower().replace(" ", "_")
		}
		sports.append(new_sport)
	print(sports)
	root.grounds.update(
		{
			"_id": ground['_id']
		},
		{
			"$set": {
				"sports": sports
			}
		}
	)