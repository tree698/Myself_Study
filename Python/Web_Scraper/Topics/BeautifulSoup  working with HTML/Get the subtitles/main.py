import requests

from bs4 import BeautifulSoup
act = int(input())
url = input()
r = requests.get(url)
soup = BeautifulSoup(r.content, 'html.parser')
links = soup.find_all('a')
for i in range(len(links)):
    if i == act:
        print(links[i].get('href'))