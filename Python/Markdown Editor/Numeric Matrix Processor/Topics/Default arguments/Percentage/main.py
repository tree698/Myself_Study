def get_percentage(number, ndigits=None):
    num = round(number * 100, ndigits)
    return f'{num}%'
