with open("salary.txt", "r") as f1:
    for line in f1:
        month = int(line)
        with open("salary_year.txt", "a") as f2:
            year = str(month * 12) + " \n"
            f2.write(year)