import requests

code_source = input().lower()
r = requests.get(f'http://www.floatrates.com/daily/{code_source}.json').json()
cache = {}
cache['usd'] = r.get('usd')
cache['eur'] = r.get('eur')

while True:
    code_target = input().lower()
    if code_target == "":
        break
    else:
        amount = float(input())
        print('Checking the cache...')
        if code_target in cache:
            print('Oh! It is in the cache!')
            result1 = round(amount * cache[code_target]['rate'], 2)
            print(f'You received {result1} {code_target.upper()}.')
        else:
            print('Sorry, but it is not in the cache!')
            c = r.get(code_target)
            cache[code_target] = c
            result2 = round(amount * c['rate'], 2)
            print(f'You received {result2} {code_target.upper()}.')











