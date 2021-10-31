def check_email(string):
    if ' ' in string:
        return False
    if "@" not in string:
         return False
    name, domain = string.split('@', 1)
    if '.' not in domain[1:]:
        return False
    return True


