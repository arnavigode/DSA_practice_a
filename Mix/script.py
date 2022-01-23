print("How many day's temperature?")
totalDays = int(input())
temperatureArr = []

for i in range(totalDays):
  print("Day " + str(i+1) + "'s high temp:")
  temperatureArr.append(int(input()))

avg = sum(temperatureArr)/len(temperatureArr)
count = 0
for i in temperatureArr:
  if i > avg:
    count += 1

print("Average = ", avg)
print(count, " days(s) above average")