# put your code here. The data frame is already loaded and stored as penguins_df. 
result = penguins_df.loc[penguins_df.sex == 'FEMALE', ['species', 'island', 'sex']]
print(result)
