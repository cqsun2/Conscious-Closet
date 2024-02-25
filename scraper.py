from urllib.request import urlopen
import requests
import time
from bs4 import BeautifulSoup, Tag
import pandas as pd
import json

url2= "https://www.wholesomeculture.com/collections/tees"
new_html = urlopen(url2)
new_bs_tops = BeautifulSoup(new_html.read(), 'html.parser')
h3 = new_bs_tops.find_all("p")
titles = []
for tag in h3:
    text = tag.get_text().strip()
    if ("Tee" in text):
        titles.append(tag.get_text().strip())

titles = list(set(titles))

image_all = new_bs_tops.find_all("img")
images = []
for image in image_all:
    if (not image.get("src") == None):
        images.append(image.get("src")[2:])


local_images = []
filename = "static/images/store/picture{}.jpg"
for i in range(3,len(titles)+3):
    # try block because not everything in the imgdata list is a valid url
    try:
        res = "https://" + images[i]
        r = requests.get(res)
        new_filename = filename.format(i)
        local_images.append(new_filename[6:])
        with open(new_filename, "wb") as f:
            f.write(r.content)
    except Exception as e:
        print(e)



top_dict2 = {}
for i in range(0, len(titles)):
    top_dict2.update({titles[i]: local_images[i]})
 

# Serializing json
json_object = json.dumps(top_dict2, indent=4)
 
# Writing to sample.json
with open("./static/data/tops.json", "w") as outfile:
    outfile.write(json_object)



