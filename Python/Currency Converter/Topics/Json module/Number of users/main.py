with open('users.json', 'r') as c:
    d = json.load(c)
    print(len(d['users']))