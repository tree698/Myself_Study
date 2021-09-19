import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

pd.set_option('display.max_columns', 8)
general = pd.read_csv('test/general.csv')
prenatal = pd.read_csv('test/prenatal.csv')
sports = pd.read_csv('test/sports.csv')

# change columns name
prenatal.columns = general.columns
sports.columns = general.columns

# merge
result = general.append(prenatal, ignore_index=True)
result = result.append(sports, ignore_index=True)

# drop column
result.drop(columns=['Unnamed: 0'], inplace = True)

# delete all the empty rows
nan_value = float('NaN')
result.replace('', nan_value, inplace=True)
result.dropna(subset=['hospital'], inplace=True)

# Correct all the gender column
result['gender'] = result['gender'].replace(['man', 'male'], 'm')
result['gender'] = result['gender'].replace(['female', 'woman'], 'f')

# Replace NaN
result['gender'] = result['gender'].fillna('f')
for i in ['bmi', 'diagnosis', 'blood_test', 'ecg', 'ultrasound', 'mri', 'xray', 'children', 'months']:
    result[i] = result[i].fillna(0)

# print(result.shape)
# print(result.sample(n=20, random_state=30))

# Stage 4/5
# Q1)
# q1 = result['hospital'].value_counts()
# print(f'The answer to the 1st question is {q1.idxmax()}')
# q1 = result['hospital'].value_counts().index.tolist()
# print(f'The answer to the 1st question is {q1[0]}')

# Q2)
# only_general = result[result['hospital'] == 'general']
# diag_general = only_general['diagnosis'].value_counts()
# q2 = round(diag_general['stomach'] / q1['general'], 3)
# print(f'The answer to the 2nd question is {q2}')

# Q3)
# only_sports = result[result['hospital'] == 'sports']
# diag_sports = only_sports['diagnosis'].value_counts()
# q3 = round(diag_sports['dislocation'] / q1['sports'], 3)
# print(f'The answer to the 3rd question is {q3}')

# Q4)
# age_general = only_general['age'].median()
# age_sports = only_sports['age'].median()
# q4 = abs(age_general - age_sports)
# print(f'The answer to the 4th question is {int(q4)}')

# Q5)
# blood_test_count = result.groupby('hospital')['blood_test'].value_counts()
# print(f'The answer to the 5th question is {blood_test_count.idxmax()[0]}, {blood_test_count.max()} blood tests')


# Stage 5/5
# Q1)
plt.hist(result['age'], range=(0,80), bins=[0,15,35,55,70,80])
plt.show()
print(f'The answer to the 1st question: 15-35')

# Q2)
diseases = {name: list(result["diagnosis"]).count(name) for name in set(result["diagnosis"])}
diseases_df = pd.DataFrame({'count': [x for x in diseases.values()]}, index=[x for x in diseases.keys()])
diseases_df.plot.pie(y='count')
plt.show()
print(f'The answer to the 2nd question: pregnancy')

# Q3)
sns.violinplot(data=result, x="hospital", y="height")
plt.show()
print(f'The answer to the 3rd question: It\'s because of different measurement of unit')

