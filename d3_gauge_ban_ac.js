var needle_ban_ac;
  
 (function () {
     var barWidth, chart, chartInset, degToRad, repaintGauge,
         height, margin, numSections, padRad, percToDeg, percToRad,
         percent, radius, sectionIndx, svg, totalPercent, width,
             targetText, actualText, formatValue, k;
  
     percent = .65;
     numSections = 1;
     sectionPerc = 1 / numSections / 2;
     padRad = 0.025;
     chartInset = 10;
  
     // Orientation of gauge:
     totalPercent = .75;
  
     el = d3.select('.chart-gauge-banco-acordo');
  
     margin = {
         top: 0,
         right: 0,
         bottom: 0,
         left: 0
     };
  
     width = el[0][0].offsetWidth - margin.left - margin.right;
     height = width;
     radius = Math.min(width, height) / 3;
     barWidth = 40 * width / 300;
  
  
     /*
       Utility methods 
     */
     percToDeg = function (perc) {
         return perc * 360;
     };
  
     percToRad = function (perc) {
         return degToRad(percToDeg(perc));
     };
  
     degToRad = function (deg) {
         return deg * Math.PI / 180;
     };
  
     // Create SVG element
     svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);
  
     // Add layer for the panel
     chart = svg.append('g').attr('transform', "translate(" + ((width + margin.left) / 2) + ", " + ((height + margin.top) / 2) + ")");
     chart.append('path').attr('class', "arc chart-filled");
     chart.append('path').attr('class', "arc chart-empty");
     chart.append('path').attr('class', "arc chart-target");
  
     targetText = chart.append("text")
                     .attr('id', "Value")
                     .attr("font-size", 12)
                     .attr("text-anchor", "middle")
                     .attr("dy", ".15em")
                     .style("fill", '#000');
  
     actualText = chart.append("text")
                 .attr('id', "Value")
                     .attr("font-size", 14)
                     .attr("text-anchor", "middle")
                     .attr("dy", ".40em")
                     .style("fill", '#000')
                     .attr('class', 'needle_ban_ac').attr('cx', 0).attr('cy', 0).attr('r', this.radius);
  
  
     formatValue = d3.format('1%');
  
     arc3 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
     arc2 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
     arc1 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
  
     repaintGauge = function (actualPerc, targetPerc) {
          
         var next_start = totalPercent;
         arcStartRad = percToRad(next_start);
         arcEndRad = arcStartRad + percToRad(actualPerc / 2);
         next_start += actualPerc / 2;
  
         arc1.startAngle(arcStartRad).endAngle(arcEndRad);
  
         var next_start1 = totalPercent;
         arcStartRad = percToRad(next_start1);
         arcEndRad = arcStartRad + percToRad(targetPerc / 2);
         next_start1 += targetPerc / 2;
  
         arc3.startAngle(arcEndRad - padRad).endAngle(arcEndRad);
  
  
  
         arcStartRad = percToRad(next_start);
         arcEndRad = arcStartRad + percToRad((1 - actualPerc) / 2);
  
         arc2.startAngle(arcStartRad).endAngle(arcEndRad); 
		
		 	 
         var fillColor = "#ff0000";
         if (actualPerc >= targetPerc/2) {
             fillColor = "#ffff00";
         } 
		 if (actualPerc >= targetPerc) {
		 	fillColor = "#009900";
		 }
  
         chart.select(".chart-filled").style("fill", fillColor).attr('d', arc1);
         chart.select(".chart-empty").attr('d', arc2);
         chart.select(".chart-target").attr('d', arc3);
  
     }
  
  
     var Needle = (function () {
         /** 
           * Helper function that returns the `d` value
           * for moving the needle
         **/
         var recalcPointerPos = function (perc) {
             var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY;
             thetaRad = percToRad(perc / 2);
             centerX = 0;
             centerY = 0;
             topX = centerX - this.len * Math.cos(thetaRad);
             topY = centerY - this.len * Math.sin(thetaRad);
             leftX = centerX - this.radius * Math.cos(thetaRad - Math.PI / 2);
             leftY = centerY - this.radius * Math.sin(thetaRad - Math.PI / 2);
             rightX = centerX - this.radius * Math.cos(thetaRad + Math.PI / 2);
             rightY = centerY - this.radius * Math.sin(thetaRad + Math.PI / 2);
             return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
         };
  
         function Needle(el) {
             this.el = el;
             this.len = width / 3;
             this.radius = this.len / 6;
         }
  
         Needle.prototype.render = function () {
             return this.el;
         };
  
         Needle.prototype.moveTo = function (perc, perc2) {
             var self,
                 oldValue = this.perc || 0;
  
             this.perc = perc;
             self = this;
  
             // Reset pointer position
             this.el.transition().delay(100).ease('quad').duration(200).select('.needle_ban_ac').tween('reset-progress', function () {
                 return function (percentOfPercent) {
                     var progress = (1 - percentOfPercent) * oldValue;
  
                     repaintGauge(progress, perc2);
                     return d3.select(this).attr('d', recalcPointerPos.call(self, progress));
                 };
             });
  
             this.el.transition().delay(300).ease('bounce').duration(1500).select('.needle_ban_ac').tween('progress', function () {
                 return function (percentOfPercent) {
                     var progress = percentOfPercent * perc;
  
                     repaintGauge(progress, perc2);
  
                     var thetaRad = percToRad(perc2 / 2);
                     var textX = -(self.len + 5) * Math.cos(thetaRad);
                     var textY = -(self.len + 5) * Math.sin(thetaRad);
  
                     actualText.text(formatValue(perc))
                      
  
                     targetText.text('' + formatValue(perc2))
                     .attr('transform', "translate(" + textX + "," + textY + ")")
  
                     return d3.select(this).attr('d', recalcPointerPos.call(self, progress));
                 };
             });
  
         };
  
         return Needle;
  
     })();
  
     needle_ban_ac = new Needle(chart);
     needle_ban_ac.render();
  
     needle_ban_ac.moveTo(percent);
  
 })();