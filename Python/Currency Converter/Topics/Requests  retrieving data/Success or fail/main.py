import requests


def check_success(url):
    r = requests.get(url)
    if 200 <= r.status_code < 400:
        return 'Success'
    else:
        return 'Fail'


"""def check_success(url):
    return "Success" if requests.get(url) else "Fail"""""
