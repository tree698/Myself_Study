import json


colors = {"rainbow": ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
          "CMYK": ["cyan", "magenta", "yellow", "key color"],
          "RBG": ["red", "blue", "green"]}

with open('colors.json', 'w') as c:
    json.dump(colors, c)

with open('colors.json', 'r') as c:
    d_colors = json.load(c)
