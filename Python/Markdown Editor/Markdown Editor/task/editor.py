def plain():
    text = input('- Text: ')
    return text

def bold():
    text = input('- Text: ')
    return f'**{text}**'

def italic():
    text = input('- Text: ')
    return f'*{text}*'

def inline_code():
    text = input('- Text: ')
    return f'`{text}`'

def link():
    label = input('- Label: ')
    url = input('- URL: ')
    return f'[{label}]({url})'

def new_line():
    return f'\n'

def header():
    while True:
        level = int(input('- Level: '))
        if level < 1 or level > 6:
            print('The level should be within the range of 1 to 6')
            continue
        else:
            mark = '#' * level
            text = input('- Text: ')
            return f'{mark} {text}\n'

def ordered_unordered_list(list):
    while True:
        rows = int(input('Number of rows: '))
        if rows <= 0:
            print('The number of rows should be greater than zero')
            continue
        list_contents = []
        for content in range(1, rows + 1):
            content_input = input(f'Row #{content}: ')
            list_contents.append(content_input)
        result = []
        for i in range(len(list_contents)):
            if list == 'unordered-list':
                result.append(f'* {list_contents[i]}\n')
            elif list == 'ordered-list':
                result.append(f'{i + 1}. {list_contents[i]}\n')
        return result

def printer(list):
    for item in list:
        print(item, end='')
    print()

def save_to_file(save):
    with open('output.md', 'w') as output:
        for i in save:
            output.write(i)

formats = ['plain', 'bold', 'italic', 'header', 'link', 'inline-code', 'new-line', 'ordered-list', 'unordered-list']
saved = []

while True:
    user_input = input('- Choose a formatter: ')
    if user_input == '!help':
        print('Available formatters: ' + ' '.join(formats))
        print('Special commands: !help !done')
    elif user_input == '!done':
        save_to_file(saved)
        break
    elif user_input not in formats:
        print('Unknown formatting type or command')
    else:
        if user_input == 'plain':
            r1 = plain()
            saved.append(r1)
            printer(saved)
        elif user_input == 'bold':
            r2 = bold()
            saved.append(r2)
            printer(saved)
        elif user_input == 'italic':
            r3 = italic()
            saved.append(r3)
            printer(saved)
        elif user_input == 'inline-code':
            r4 = inline_code()
            saved.append(r4)
            printer(saved)
        elif user_input == 'header':
            r5 = header()
            saved.append(r5)
            printer(saved)
        elif user_input == 'link':
            r6 = link()
            saved.append(r6)
            printer(saved)
        elif user_input == 'new-line':
            r7 = new_line()
            saved.append(r7)
            printer(saved)
        elif user_input == 'unordered-list' or user_input == 'ordered-list':
            r8 = ordered_unordered_list(user_input)
            for i in r8:
                saved.append(i)
            printer(saved)




