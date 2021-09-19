# put your code here. The data frame is already loaded and stored as penguins_df. 
result = penguins_df.loc[penguins_df.species == 'Adelie', 'island':'sex':2]
print(result)