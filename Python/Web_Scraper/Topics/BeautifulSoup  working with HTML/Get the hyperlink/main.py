import requests

from bs4 import BeautifulSoup
act = int(input())
url = input()
r = requests.get(url)
soup = BeautifulSoup(r.content, 'html.parser')
links = soup.find_all('a')
# print(links)
# for i in range(1, len(links)+1):
#     if i == act:
#         print(links[i])
#         print(links[i].get('href'))
#         print(links[i]['href'])
print(links[act-1].get('href'))