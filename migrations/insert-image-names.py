from pymongo import MongoClient
from bson import ObjectId
import os

client = MongoClient('localhost', 27017)

root = client.root

print("Connected to db")

basedir = os.getcwd()

for dir in os.listdir(basedir):
	if dir != 'insert-image-names.py':
		print(dir)
		dbQuery1 = root.grounds.find({'_id': ObjectId(dir)})
		grounds = list(dbQuery1)
		print(grounds)
		images = {}
		for subdir in os.listdir(dir):
			if os.path.isdir(os.path.join(dir, subdir)):
				print(subdir)
				images[subdir] = []
				for file in os.listdir(os.path.join(dir, subdir)):
					print(file)
					images[subdir].append(file)
		print(images)
		root.grounds.update(
			{
				"_id": ObjectId(dir)
			},
			{
				"$set": {
					"images": images
				}
			}
		)
		print("Updated: " + dir)