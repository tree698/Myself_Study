def select_dates(potential_dates):
    answer = []
    for i in potential_dates:
        if i['age'] > 30 and i['city'] == 'Berlin' and 'art' in i['hobbies']:
            answer.append(i['name'])
    return ", ".join(answer)

