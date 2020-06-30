import pandas as pd
#File locations
OLD_INPUT = "data/2019/belgian_municipalities.csv"
NEW_INPUT = "data/2020/munic.csv"
OUTPUT_JSON = "data/2020/root.json"
#Load CSVs into dataframe
OLD_DATA = pd.read_csv(OLD_INPUT)
NEW_DATA = pd.read_csv(NEW_INPUT).drop(columns=["Mannen","Vrouwen","Woonplaats"])
NEW_DATA["Totaal"]= NEW_DATA["Totaal"].str.replace(',','')

#Set indexes to merge dataframes
OLD_DATA.set_index(["NIS_code"])
NEW_DATA.set_index(["NIS code"])

#merge data frames
df = OLD_DATA.join(NEW_DATA,how='outer').fillna(0)
df["inhabitants"] = df["Totaal"]
df = df.drop(columns=["NIS code","Totaal"])

jsn = df.to_json(orient='records')

with open(OUTPUT_JSON, 'w') as file:
    file.write(jsn)