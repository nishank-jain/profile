from pymongo import MongoClient
import os

client = MongoClient('localhost', 27017)

root = client.root

print("Connected to db")

dbQuery1 = root.grounds.find({}, {'id': 1})   # Finds ids of all grounds with uuids
grounds = list(dbQuery1)

for ground in grounds:
	print(ground['id'])
	actual_id = str(ground['_id'])
	to_replace = ground['id']
	os.rename(to_replace, actual_id)


# basedir = os.getcwd()
# for dir in os.listdir(basedir):
# 	print(dir)