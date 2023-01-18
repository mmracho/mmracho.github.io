from io import StringIO
import csv

def file_read(fname):
    content_array = []
    with open(fname, newline='', encoding="utf-8") as csvFile:
        reader = csv.reader(csvFile, delimiter=':')
        for row in reader:
            if (row[0].startswith('#') == False):
                content_array.append(row)
    f = open("resources/convKRAD.txt", "w", encoding="utf-8")
    for entry in content_array:
        f.write("    {\n")
        f.write("        kanji: " + '"' + entry[0].replace(' ', '') + '"' + ",\n")
        f.write("        radicals: " + '"' + entry[1].replace(' ', '') + '"')
        f.write("\n    },\n")
    f.close()

file_read("resources/kradfile_conv")