class Task:
    def __init__(self, description, team):
        self.description = description
        self.team = team

    def __add__(self, other):
        description = self.description + '\n' + other.description
        team = self.team, other.team
        return self.description, self.team