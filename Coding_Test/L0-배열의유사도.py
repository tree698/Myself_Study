s1= ["a", "b", "c"]
s2= ["com", "b", "d", "p", "c"]

def Solution(s1, s2):
    return len([x for x in s1 if x in s2])

print(Solution(s1, s2))


