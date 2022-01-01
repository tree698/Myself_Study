import requests


def get_response(url):
    try:
        response = requests.get(url)
        print(response.status_code)
    except ValueError:
        print('No response')
