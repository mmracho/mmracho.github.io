from io import StringIO
import csv

def file_read(fname):
    content_array = []
    temp_array = []
    temp_string = ''
    with open(fname, newline='', encoding="utf-8") as csvFile:
        reader = csv.reader(csvFile)
        for row in reader:
            if (row[0].startswith('#') == False):
                if (row[0].startswith('$') == True):
                    if (temp_string == ''):
                        temp_array.append(row[0])
                    else:
                        temp_array.append(temp_string)
                        content_array.append(temp_array)
                        temp_string = ''
                        temp_array = []
                        temp_array.append(row[0])
                else:
                    temp_string = temp_string + row[0]
    temp_array.append(temp_string)
    content_array.append(temp_array)
    temp_string = ''
    f = open("resources/convRADK.txt", "w", encoding="utf-8")
    for entry in content_array:
        f.write("    {\n")
        f.write("        radical: " + '"' + entry[0][2:3] + '"' + ",\n")
        f.write("        kanjis: " + '"' + entry[1].replace(' ', '') + '"')
        f.write("\n    },\n")
    f.close()

file_read("resources/radkfile_conv")