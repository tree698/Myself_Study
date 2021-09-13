class Painting:

    def __init__(self):
        self.name = 'Louvre'

    def painting_list(self, title, artist, year):
        print(f'"{title}" by {artist} ({year}) hangs in the {self.name}.')

a = Painting()
a.painting_list(input(), input(), input())