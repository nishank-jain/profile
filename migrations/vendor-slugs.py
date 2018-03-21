import pymongo
from pymongo import MongoClient
import requests
import json

client = MongoClient('localhost', 27017)

root = client.root

print("Connected to db")

print("Starting Migration for parent_grounds collection" + "\n\n")

dbQuery1 = root.parent_grounds.find({})
grounds = list(dbQuery1)

for ground in grounds:
	ground_name = ground['name'].lower().replace("'", "").replace(" ", "-")
	ground_area = ground['area'].lower().replace("'", "").replace(" ", "-")
	ground_slug = ground_name + "-" + ground_area
	ground_slug = ground_slug.replace("---", "-").replace("(", "").replace(")", "")
	print(ground_slug)
	root.parent_grounds.update(
		{
			"_id": ground['_id']
		},
		{
			"$set": {
				"slug": ground_slug
			}
		}
	)