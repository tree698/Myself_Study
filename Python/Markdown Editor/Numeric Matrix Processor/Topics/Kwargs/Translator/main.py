def translate(**kwargs):
    for word, word1 in kwargs.items():
        print(word, ":", word1)

words = {"mother": "madre", "father": "padre", 
         "grandmother": "abuela", "grandfather": "abuelo"}

translate(**words)
