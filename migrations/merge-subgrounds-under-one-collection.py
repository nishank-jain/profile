from pymongo import MongoClient

client = MongoClient('localhost', 27017)

root = client.root

print("Connected to db")

dbQuery1 = root.grounds_volleyball.find({})
courts = list(dbQuery1)

for court in courts:
	root.courts.insert_one(court)