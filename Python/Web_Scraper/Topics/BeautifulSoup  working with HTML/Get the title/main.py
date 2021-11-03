import requests

from bs4 import BeautifulSoup
url = input()
r = requests.get(url)
soup = BeautifulSoup(r.content, 'html.parser')
headings = soup.find_all('h1')
for i in headings:
    print(i.text)