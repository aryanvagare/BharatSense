import os

input_file = "p2.csv"

output1 = "part3.csv"
output2 = "part4.csv"

# Count data rows
with open(input_file, "r", encoding="utf-8", errors="replace") as f:
    total_rows = sum(1 for _ in f) - 1

mid = total_rows // 2

print("Total rows:", total_rows)
print("Part 3 rows:", mid)
print("Part 4 rows:", total_rows - mid)

with open(input_file, "r", encoding="utf-8", errors="replace") as infile, \
     open(output1, "w", encoding="utf-8", newline="") as part3, \
     open(output2, "w", encoding="utf-8", newline="") as part4:

    # Header
    header = infile.readline()

    part3.write(header)
    part4.write(header)

    # Write rows
    for row_number, line in enumerate(infile):

        if row_number < mid:
            part3.write(line)
        else:
            part4.write(line)

print("\nSuccessfully created:")
print(os.path.abspath(output1))
print(os.path.abspath(output2))