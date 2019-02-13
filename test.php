
<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
 	<p> Nguyen Pham</p>
	<?php
		echo "<center>";
		echo "<table border=\"1\">\n";
		echo " <tr align=\"center\"><th>Name</th><th>Value</th></tr>\n";
		foreach ($_POST as $name => $value) {
			if(is_array($value)){
				$i=0;
				foreach ($value as $item){
					echo "<tr><td>".$name."[".$i."]</td><td>".$item."</td></tr>";
					$i++;		
					}		
			}
			else
				echo "<tr><td>".$name."</td><td>".$value."</td></tr>";	
		}
		echo "</table>\n";
		echo "</center>"
	?>	
 </body>
</html>