from pymongo import MongoClient

client = MongoClient('localhost', 27017)

root = client.root

print("Connected to db")

dbQuery1 = root.grounds.find({})
grounds = list(dbQuery1)

for ground in grounds:
	ground_amenities = ground['amenities'].split(',')
	amenities = []
	for amenity in ground_amenities:
		new_amenity = {
			"name": amenity,
			"slug": amenity.lower().replace(" ", "_")
		}
		amenities.append(new_amenity)
	print(amenities)
	root.grounds.update(
		{
			"_id": ground['_id']
		},
		{
			"$set": {
				"amenities": amenities
			}
		}
	)