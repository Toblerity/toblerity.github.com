// var margin = {top: 20, right: 20, bottom: 30, left: 40};
// var width = 500 - margin.left - margin.right;
// var height = 200 - margin.top - margin.bottom;
// 
// 
// var headings=["Bulk", "One-at-a-time"];
// // var data=[177889.65, 290083.60];
// 
// var data=[10, 20];
// 
// var y = d3.scale.linear()
//      .domain([0, d3.max(data)])
//      .range([0, 300000]);
// 
// var chart = d3.select("#loadchart").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
// .attr("class", "chart")
//   .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// 
// var padding=1;    
// 
//  chart.selectAll("rect")
//      .data(data)
//    .enter().append("rect")
//      .attr("x", function(d, i) { return i * (width / data.length); })
//      .attr("y", function(d) { height - (d*4); })
//      .attr("width",  width / data.length - padding)
//      .attr("height", function(d) { return d*4; });

var margin = {top: 20, right: 20, bottom: 30, left: 40};
var width = 500 - margin.left - margin.right;
var height = 200 - margin.top - margin.bottom;
var padding = 2;

var headings=["Bulk", "One-at-a-time"];
var data=[180000, 290000];


var y = d3.scale.linear()
     .domain([150000, d3.max(data)])
     .range([0, height]);
var x = d3.scale.ordinal()
     .domain(headings);
     
//Create SVG element
var svg = d3.select("#loadchart")
			.append("svg")
			.attr("width", width)
			.attr("height", height);

var c=d3.rgb("#C0A86E");

svg.selectAll("rect")
   .data(data)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
   		return i * (width / data.length);
   })
   .attr("y", function(d) {
   		return height - y(d);
   })
   .attr("width", width / data.length - padding)
   .attr("height", function(d) {
   		return y(d);
   })
   .attr("fill", function(d) {
		return c;
   });

svg.selectAll("text")
	   .data(data)
	   .enter()
	   .append("text")
	   .text(function(d) {
	   		return d;
	   })
	   .attr("text-anchor", "middle")
	   .attr("x", function(d, i) {
	   		return i * (width / data.length) + (width / data.length - padding) / 2;
	   })
	   .attr("y", function(d) {
	   		return height - (y(d)  - 14);
	   })
	   .attr("font-family", "sans-serif")
	   .attr("font-size", "12px")
	   .attr("fill", "white");
