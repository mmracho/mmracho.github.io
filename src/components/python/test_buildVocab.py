from io import StringIO
import csv

def file_read(fname):
    content_array = []
    with open(fname, newline='', encoding="utf-8") as csvFile:
        reader = csv.reader(csvFile, delimiter=',', quotechar='"')
        for row in reader:
            content_array.append(row)
    f = open("resources/convVocab.txt", "w", encoding="utf-8")
    for entry in content_array:
        f.write("    {\n")
        f.write("        kanji: " + '"' + entry[0] + '"' + ",\n")
        f.write("        kana: " + '"' + entry[1] + '"' + ",\n")
        f.write("        meaning: " + '"' + entry[2] + '"' + ",\n")
        f.write("        JLPT: " + entry[3])
        f.write("\n    },\n")
    f.close()

file_read("resources/JLPT_Vocabulary_All.csv")