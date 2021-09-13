# read test_file.txt
with open('test_file.txt', 'r', encoding='utf-16') as f:
    line = f.readline()
    print(line)