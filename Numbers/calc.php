<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="calcstyle.css">

<body>



<div id="calculator">
	
	<span>Calculator</span>
	<ul class="titleBarButtons">
		<li id="close"></li>
		<li id="minimize"></li>
		<li id="zoom"></li>
	</ul>
	
	<div id="output"></div>

	<form id="buttons">
			<!-- Row 1 -->
		<ul>
			<li><button id="MC">MC</button></li>
			<li><button id="Mplus">M+</button></li>
			<li><button id="Mminus">M-</button></li>
			<li><button id="Mrecall">MR</button></li>
		</ul>
		<!-- Row 2 -->
		<ul>		
			<li><button id="Clear">C</button></li>
			<li><button id="PlusMinus">±</button></li>
			<li><button id="/">÷</button></li>
			<li><button id="*">×</button></li>
		</ul>

		<!-- Row 3 -->
		<ul>		
			<li><button id="7">7</button></li>
			<li><button id="8">8</button></li>
			<li><button id="9">9</button></li>
			<li><button id="-">-</button></li>
		</ul>

		<!-- Row 4 -->
		<ul>		
			<li><button id="4">4</button></li>
			<li><button id="5">5</button></li>
			<li><button id="6">6</button></li>
			<li><button id="+">+</button></li>
		</ul>

		<!-- Row 5 -->
		<ul>		
			<li><button id="1">1</button></li>
			<li><button id="2">2</button></li>
			<li><button id="3">3</button></li>
			<li><button id="Enter">=</button></li>
		</ul>

		<!-- Row 6 -->
		<ul>		
			<li><button id="0">0</button></li>
			<li><button id="Decimal">.</button></li>
		</ul>

	</form>

</div>

<!-- jQuery, Underscore & Backbone libraries -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore-min.js" type="text/javascript"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js" type="text/javascript"></script>

<!-- Templates -->
<script type="text/template" id="calcDisplay">
<%= display %>
<span class="operator"><%= operator %></span>
</script>

<!-- Models -->
<script src="calcModel.js" type="text/javascript"></script>

<!-- Views -->
<script src="calcDisplayView.js" type="text/javascript"></script>
<script src="buttonsView.js" type="text/javascript"></script>

<!-- Initialize -->
<script src="main.js" type="text/javascript"></script>
<script>

document.addEventListener("DOMContentLoaded", initCalc);


</script>


</body>
</html>