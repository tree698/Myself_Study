f_name = "test.txt"
my_string = "A string to be written to a file!"

# what to do with the file and the string
with open('test.txt', 'w') as t:
    print(my_string, file=t)