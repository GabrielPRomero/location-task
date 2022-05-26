<h1>Problem</h1> 
<p>Write a program that solves the most suitable (with highest non-zero speed) network station for a device at a given point (x, y). </p>
<p>This problem can be solved in 2-dimensional space. Network stations have reach and speed that depends on the distance to the station.</p>

### A network station’s speed can be calculated as follows:

<p>speed = (reach - device's distance from network station)^2 if distance > reach, speed = 0 </p>
<p>Network stations are located at points (x, y) and have reach r: </p>
<table>
<tr>
<th>x</th>
<th>y</th>
<th>reach</th>
</tr>

<tr>
<td>0</td>
<td>0</td>
<td>9</td>
</tr>

<tr>
<td>20</td>
<td>20</td>
<td>6</td>
</tr>

<tr>
<td>10</td>
<td>0</td>
<td>12</td>
</tr>

<tr>
<td>5</td>
<td>5</td>
<td>13</td>
</tr>

<tr>
<td>99</td>
<td>25</td>
<td>2</td>
</tr>

</table>

### Print out the most suitable network station and the network speed from devices (x, y): (0, 0), (100, 100), (15, 10), (18, 18), (13, 13) and (25, 99)

### Program should output the solution to these two cases:

<p>● Best station found, output station location and speed</p>
<p>● No station within reach found, output error message</p>
<h3>It can be in the form of:</h3>
<span>“Best network station for point x,y is x,y with speed z” “No network station within reach for point x,y”</span>
<h3>Example output from solution:</h3>
<span>“Best network station for point 15,10 is 5,5 with speed 3.3111629250273373”</span>



## How to run solution

1. Clone the code
2. Change directory to src folder
3. Run the location_task.js file with node "node location_task.js"

The results will be printed on the console.

## How to run tests on the solution

1. After cloning the code run "npm install"
2. Install the Jest cli using "npm i jest-cli -g"
3. Run "jest"
