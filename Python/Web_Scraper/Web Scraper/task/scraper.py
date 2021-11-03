import requests
from bs4 import BeautifulSoup
from string import punctuation
import os

def save_article(the_article_type, dir_name, url):
    if not os.path.exists(dir_name):
        os.mkdir(dir_name)
    r = requests.get(url)
    soup = BeautifulSoup(r.content, "html.parser")
    articles = soup.find_all("article")
    result = []
    for article in articles:
        article_type = article.find('span', {'data-test':'article.type'}).text
        if article_type == f'\n{the_article_type}\n':
            title = article.find('a', {'data-track-action': 'view article'})
            title_save = title.text.strip(' ').translate(str.maketrans("", "", punctuation)).replace(' ', '_') + '.txt'
            result.append(title_save)

            url_new = requests.get('https://www.nature.com' + title.get('href'))
            url_new_parser = BeautifulSoup(url_new.content, 'html.parser')

            with open(dir_name + '/' + title_save, 'w', encoding='utf-8') as t:
                if article_type == '\nResearch Highlight\n':
                    t.write(url_new_parser.find('div', {'class': 'article-item__body'}).text)
                else:
                    t.write(url_new_parser.find('div', {'class': 'c-article-body'}).text)

page = int(input())
article_type = input()
for i in range(page):
    dir_name = f'Page_{i+1}'
    url = f'https://www.nature.com/nature/articles?searchType=journalSearch&sort=PubDate&Page={i + 1}'
    save_article(article_type, dir_name, url)
print('Saved all articles.')






# nature_web = requests.get('https://www.nature.com/nature/articles?sort=PubDate&year=2020&page=3')
# nature_parser = BeautifulSoup(nature_web.content, 'html.parser')
# result = []
# for i in nature_parser.find_all('article'):
#     # article_type =
#     if i.find('span', {'data-test':'article.type'}).text == '\nNews\n':
#         title = i.find('a', {'data-track-action' : 'view article'})
#         title_save = title.text.strip(' ').translate(str.maketrans("", "", punctuation)).replace(' ', '_') + '.txt'
#         result.append(title_save)
#
#         nature_body_web = requests.get('https://www.nature.com' + title.get('href'))
#         nature_body_web_parser = BeautifulSoup(nature_body_web.content, 'html.parser')
#
#         with open(title_save, 'w', encoding='utf-8') as t:
#             t.write(nature_body_web_parser.find('div', {'class':'c-article-body'}).text)
# print('Saved articles:', result)


# answer = {}
# url = input()
# r = requests.get(url, headers={'Accept-Language': 'en-US,en;q=0.5'})
# soup = BeautifulSoup(r.content, 'html.parser')
# title = soup.find('h1')
# description = soup.find('p', class_="GenresAndPlot__Plot-cum89p-6 bUyrda")
# movie = soup.find_all('data-testid')
#
# if movie is None or description is None:
#     print('Invalid movie page!')
# else:
#     answer['title'] = title.text
#     answer['description'] = description.text
#     print(answer)

# url = input('Input the URL: ')
# r = requests.get(url).content
# with open('source.html', 'wb') as s:
#     s.write(r)
#
# r1 = requests.get(url)
# resp = r1.status_code
# if r1.ok:
#     print('Content saved')
# else:
#     print(f'The URL returned {resp}!')

# nature_web = requests.get('https://www.nature.com/nature/articles?sort=PubDate&year=2020&page=3')
# nature_parser = BeautifulSoup(nature_web.content, 'html.parser')
# result = []
# for i in nature_parser.find_all('article'):
#     # article_type =
#     if i.find('span', {'data-test':'article.type'}).text == '\nNews\n':
#         title = i.find('a', {'data-track-action' : 'view article'})
#         title_save = title.text.strip(' ').translate(str.maketrans("", "", punctuation)).replace(' ', '_') + '.txt'
#         result.append(title_save)
#
#         nature_body_web = requests.get('https://www.nature.com' + title.get('href'))
#         nature_body_web_parser = BeautifulSoup(nature_body_web.content, 'html.parser')
#
#         with open(title_save, 'w', encoding='utf-8') as t:
#             t.write(nature_body_web_parser.find('div', {'class':'c-article-body'}).text)
# print('Saved articles:', result)








