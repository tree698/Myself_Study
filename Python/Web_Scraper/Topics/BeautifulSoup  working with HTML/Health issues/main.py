import requests

from bs4 import BeautifulSoup
url = input()
r = requests.get(url)
soup = BeautifulSoup(r.content, 'html.parser')
subtitle = soup.find_all('a')
answer = []
for i in subtitle:
    if i.text.startswith('S'):
        if 'topics' in i.get('href') or 'entity' in i.get('href'):
            if len(i.text) > 1:
                answer.append(i.text)
print(answer)